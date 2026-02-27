import { RefObject } from 'react';
import type {
  DrawInput,
  DrawWheelAfterFillColors,
  DrawWheelContext,
  DrawWheelContextAfterCompile,
  DrawWheelContextAfterTexture,
  Picker,
  PickerWithColor,
  PrepareCanvasInput,
  WheelComputedSize,
  WheelOutput,
  WheelOutputAccents,
  WheelProps,
} from './wheel.types';
import type { HSL, HSLA, Position, RGBA } from '@/types';
import type { ThemeColor } from '@/theme';
import { CssColorsFactories } from '@/factories';
import VERTEX from './wheel.vertex.glsl?raw';
import WHEEL from './wheel.shader.glsl?raw';
import PICKERS from './pickers.shader.glsl?raw';
import { LIGHTNESS_MAP, SATURATION_MAP } from './wheel.static';
import { executeGlsl, SQUARE } from './execute-glsl';

export const WheelUtils = {
  prepareGlslSrc: (src: string, props: WheelProps): string => {
    return src.replaceAll(
      '#PICKERS_LENGTH',
      (props.pickers?.length || 0).toString(),
    );
  },
  getCanvasContext: <
    T extends PrepareCanvasInput,
    Context extends '2d' | 'webgl2',
  >(
    ref: T,
    contextType: Context,
    options?: any,
  ): {
    obj: T extends RefObject<HTMLCanvasElement | null> | HTMLCanvasElement
      ? HTMLCanvasElement
      : OffscreenCanvas;
    context: T extends RefObject<HTMLCanvasElement | null> | HTMLCanvasElement
      ? Context extends '2d'
        ? CanvasRenderingContext2D
        : WebGL2RenderingContext
      : Context extends '2d'
        ? OffscreenCanvasRenderingContext2D
        : WebGL2RenderingContext;
  } => {
    if ('current' in ref) {
      if (ref.current === null) {
        throw new Error(`It could not get canvas`);
      }

      return WheelUtils.getCanvasContext<T, Context>(
        ref.current as T,
        contextType,
        options,
      );
    }

    const context = ref.getContext(contextType, options);

    if (context === null) {
      throw new Error('It could not get 2d context!');
    }

    return {
      obj: ref,
      context,
    } as any;
  },
  prepare: ({
    canvas,
    cache,
    props,
    render2d,
    webGL,
  }: DrawInput): DrawWheelContext => {
    render2d.imageSmoothingEnabled = true;
    render2d.imageSmoothingQuality = 'high';
    render2d.setTransform(1, 0, 0, 1, 0, 0);
    webGL.viewport(0, 0, props.computed.totalSize, props.computed.totalSize);
    webGL.getExtension('EXT_color_buffer_float');
    webGL.pixelStorei(webGL.UNPACK_COLORSPACE_CONVERSION_WEBGL, false);

    return {
      props,
      canvas,
      cache,
      render2d,
      webGL,
    };
  },
  clear: (context: DrawWheelContext): DrawWheelContext => {
    if (context.canvas.width !== context.props.computed.totalSize) {
      context.canvas.width = context.props.computed.totalSize;
    }

    if (context.canvas.height !== context.props.computed.totalSize) {
      context.canvas.height = context.props.computed.totalSize;
    }

    context.render2d.clearRect(
      0,
      0,
      context.props.computed.totalSize,
      context.props.computed.totalSize,
    );
    context.webGL.clearColor(1, 1, 1, 1);
    context.webGL.clear(
      context.webGL.COLOR_BUFFER_BIT || context.webGL.DEPTH_BUFFER_BIT,
    );

    return context;
  },
  compile: (context: DrawWheelContext): DrawWheelContextAfterCompile => {
    const vertex = CssColorsFactories.makeShader(
      context.webGL,
      context.webGL.VERTEX_SHADER,
      WheelUtils.prepareGlslSrc(VERTEX, context.props),
    );

    const wheel = CssColorsFactories.makeGlslProgram(
      context.webGL,
      vertex,
      CssColorsFactories.makeShader(
        context.webGL,
        context.webGL.FRAGMENT_SHADER,
        WheelUtils.prepareGlslSrc(WHEEL, context.props),
      ),
    );

    const pickers = CssColorsFactories.makeGlslProgram(
      context.webGL,
      vertex,
      CssColorsFactories.makeShader(
        context.webGL,
        context.webGL.FRAGMENT_SHADER,
        WheelUtils.prepareGlslSrc(PICKERS, context.props),
      ),
    );

    const vao = context.webGL.createVertexArray();
    context.webGL.bindVertexArray(vao);

    return {
      ...context,
      vertex,
      wheel,
      pickers,
      vao,
    };
  },
  prepareTexture: (
    context: DrawWheelContextAfterCompile,
  ): DrawWheelContextAfterTexture => {
    const texture = CssColorsFactories.makeTexture2D(
      context.webGL,
      context.props.computed.totalSize,
    );

    const framebuffer = CssColorsFactories.makeFrameBuffer(
      context.webGL,
      texture,
    );

    executeGlsl(context.webGL, context.vao, context.wheel, SQUARE, {
      u_resolution: [
        'uniform2fv',
        [context.props.computed.totalSize, context.props.computed.totalSize],
      ],
      u_darkness: ['uniform1f', context.props.darkness],
    });

    return {
      ...context,
      framebuffer,
      texture,
    };
  },
  fillColors: (
    context: DrawWheelContextAfterTexture,
  ): DrawWheelAfterFillColors => {
    return {
      ...context,
      colors: context.props.pickers.map((picker) => {
        const pixel = new Uint8Array(4);

        context.webGL.readPixels(
          picker.x,
          picker.y,
          1,
          1,
          context.webGL.RGBA,
          context.webGL.UNSIGNED_BYTE,
          pixel,
        );

        return {
          ...picker,
          color: {
            type: 'RGBA',
            red: pixel[0],
            green: pixel[1],
            blue: pixel[2],
            alpha: pixel[3] / 255,
            raw: `rgba(${((pixel[0], pixel[1], pixel[2]), pixel[3] / 255)})`,
          },
        } satisfies PickerWithColor;
      }),
    };
  },
  draw: (context: DrawWheelAfterFillColors): DrawWheelAfterFillColors => {
    context.webGL.bindFramebuffer(context.webGL.FRAMEBUFFER, null);

    executeGlsl(
      context.webGL,
      context.vao,
      context.pickers,
      SQUARE,
      {
        u_previous: ['uniform1i', 0],
        u_pickers: [
          'uniform2fv',
          context.props.pickers.flatMap((picker) => [picker.x, picker.y]),
        ],
        u_picker_selected_index: ['uniform1i', context.props.selectedIndex],
        u_resolution: [
          'uniform2fv',
          [context.props.computed.totalSize, context.props.computed.totalSize],
        ],
        u_pickers_count: ['uniform1i', context.props.pickers.length || 0],
        u_free_move: ['uniform1i', context.props.freeMove === true ? 1 : 0],
      },
      [context.texture],
      context.webGL.TEXTURE0,
    );

    return context;
  },
  bind: (context: DrawWheelAfterFillColors): DrawWheelAfterFillColors => {
    const bitmap = context.cache.transferToImageBitmap();
    context.render2d.drawImage(bitmap, 0, 0);
    return context;
  },
  getBackground: (
    computed: WheelComputedSize,
    background: ImageData,
    picker: Picker,
  ): RGBA => {
    const x = picker.x;
    const y = computed.totalSize - picker.y;
    const index = (y * computed.totalSize + x) * 4;

    const red = background.data[index];
    const green = background.data[index + 1];
    const blue = background.data[index + 2];

    return {
      type: 'RGBA',
      red,
      green,
      blue,
      alpha: 1,
      raw: `rgba(${red}, ${green}, ${blue}, ${1})`,
    };
  },
  clampColor: (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x)) * 100,
  shade: (color: HSL | HSLA, light: number, scale: number): HSLA => {
    const hue = color.hue;
    const saturation = WheelUtils.clampColor(color.saturation * scale);
    const lightness = WheelUtils.clampColor(light);

    return {
      type: 'HSLA',
      hue,
      saturation,
      lightness,
      alpha: (color as HSLA).alpha || 1,
      raw: `hsla(${hue}, ${saturation}%, ${lightness}%, ${(color as HSLA).alpha || 1})`,
    } as HSLA;
  },
  makeColorAccents: (main: HSLA, id: string): WheelOutput => {
    return (
      [
        '900',
        '800',
        '700',
        '600',
        'main',
        '400',
        '300',
        '200',
        '100',
      ] satisfies WheelOutputAccents[]
    ).reduce(
      (output, accent) => {
        const color: HSLA =
          accent === 'main'
            ? main
            : WheelUtils.shade(
                main,
                LIGHTNESS_MAP[accent],
                SATURATION_MAP[accent],
              );
        const rgba = CssColorsFactories.makeCurrentColorTo(color, 'RGBA');
        const luminance = CssColorsFactories.makeLuminance(rgba);
        const highlight = CssColorsFactories.makeCurrentColorTo(
          WheelUtils.shade(color, 0.7, 0.9),
          'RGBA',
        );
        const text = CssColorsFactories.makeTextColorFromLuminance(luminance);
        const shadow = {
          ...text,
          alpha: 0.3,
          raw: `rgba(${text.red}, ${text.green}, ${text.blue}, 0.2)`,
        } satisfies RGBA;

        return {
          ...output,
          [accent]: {
            color: rgba,
            highlight,
            text,
            shadow,
          } satisfies ThemeColor,
        };
      },
      {
        id,
        activeAccent: 'main',
        kind: 'RGBA',
        applyTo: 'color',
      } as WheelOutput,
    );
  },
  getWheelOutput: (context: DrawWheelAfterFillColors): WheelOutput[] => {
    return context.colors.map((current) =>
      WheelUtils.makeColorAccents(
        CssColorsFactories.makeCurrentColorTo(current.color, 'HSLA'),
        current.id,
      ),
    );
  },
  getMousePosition: (
    canvas: HTMLCanvasElement,
    event: React.MouseEvent | React.PointerEvent | PointerEvent,
  ): Position => {
    const rect = canvas.getBoundingClientRect();

    return {
      x: Math.floor(event.clientX - rect.left),
      y: Math.floor(rect.height - (event.clientY - rect.top)),
    };
  },
  clampPosition: (
    computed: WheelComputedSize,
    moveTo: Position,
  ): [Position, number, number] => {
    const area = computed.radius;
    const centerDistanceX = moveTo.x - computed.center.x;
    const centerDistanceY = moveTo.y - computed.center.y;
    const distance = Math.sqrt(
      centerDistanceX * centerDistanceX + centerDistanceY * centerDistanceY,
    );
    const angle = Math.atan2(centerDistanceY, centerDistanceX);
    const limit = computed.radius - 12;

    return [
      distance <= area
        ? { ...moveTo }
        : ({
            x: computed.center.x + limit * Math.cos(angle),
            y: computed.center.y + limit * Math.sin(angle),
          } satisfies Position),
      angle,
      distance,
    ];
  },
  freeMove: (
    pickers: Picker[],
    selectedPicker: string,
    computed: WheelComputedSize,
    mouse: Position,
  ): Picker[] => {
    const [moveTo] = WheelUtils.clampPosition(computed, mouse);
    const allPositions = pickers.map(({ x, y }) => ({ x, y }));

    return pickers.map((picker) => {
      if (picker.id !== selectedPicker) {
        return picker;
      }

      if (allPositions.includes(moveTo)) {
        return {
          ...picker,
          x: moveTo.x - 20,
          y: moveTo.y - 20,
        };
      } else {
        return { ...picker, ...moveTo };
      }
    });
  },
  move: (
    pickers: Picker[],
    selectedPicker: string,
    selectedPickerIndex: number,
    distanceBetweenEachPicker: number,
    computed: WheelComputedSize,
    mouse: Position,
  ): Picker[] => {
    const delta = (distanceBetweenEachPicker * Math.PI) / 180;
    const [moveTo, angle, distance] = WheelUtils.clampPosition(computed, mouse);

    return pickers.map((picker, index) => {
      if (picker.id === selectedPicker) {
        return {
          ...picker,
          ...moveTo,
        };
      }

      const relative = index - selectedPickerIndex;
      const rad = angle + relative * delta;
      const rotateAngle = Math.atan2(Math.sin(rad), Math.cos(rad));
      const [othersMove] = WheelUtils.clampPosition(computed, {
        x: computed.center.x + distance * Math.cos(rotateAngle),
        y: computed.center.y + distance * Math.sin(rotateAngle),
      });

      return {
        ...picker,
        ...othersMove,
      };
    });
  },
  intersects: (mouse: Position, element: Position, area: number) => {
    const dX = mouse.x - element.x;
    const dY = mouse.y - element.y;

    return dX * dX + dY * dY <= area * area;
  },
};
