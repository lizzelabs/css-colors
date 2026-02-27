import { Shape } from './wheel.types';

export const SQUARE: Shape = {
  type: 0x0005,
  vertices: new Float32Array([
    -1,
    1, // Top Left
    1,
    1, // Top Right
    -1,
    -1, // Bottom Left
    1,
    -1, // Bottom Right
  ]),
  first: 0,
  count: 4,
};

export const executeGlsl = (
  context: WebGL2RenderingContext,
  vao: WebGLVertexArrayObject,
  program: WebGLProgram,
  shape: Shape,
  variables?: {
    [key: string]: [
      'uniform1f' | 'uniform2fv' | 'uniform1i',
      GLfloat | Iterable<GLfloat>,
    ];
  },
  textures: WebGLTexture[] = [],
  activeTexture: number | undefined = undefined,
): void => {
  const position = context.createBuffer();
  context.enableVertexAttribArray(0);
  context.bindBuffer(context.ARRAY_BUFFER, position);
  context.vertexAttribPointer(0, 2, context.FLOAT, false, 0, 0);
  context.useProgram(program);
  context.bindVertexArray(vao);

  if (activeTexture) {
    context.activeTexture(activeTexture);
  }

  for (const texture of textures) {
    context.bindTexture(context.TEXTURE_2D, texture);
  }

  const uniforms = Object.keys(variables);
  const locations = uniforms.reduce(
    (result, key) => ({
      ...result,
      [key]: context.getUniformLocation(program, key),
    }),
    {},
  );

  for (const uniform of uniforms) {
    const location = locations[uniform as keyof typeof locations];
    const [type, value] = variables[uniform];
    (context[type] as any)(location, value);
  }

  context.bufferData(context.ARRAY_BUFFER, shape.vertices, context.STATIC_DRAW);
  context.drawArrays(shape.type, shape.first, shape.count);
};
