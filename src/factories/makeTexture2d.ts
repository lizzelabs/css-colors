export const makeTexture2D = (
  context: WebGL2RenderingContext,
  size: number,
): WebGLTexture => {
  const texture = context.createTexture();
  context.bindTexture(context.TEXTURE_2D, texture);

  context.texImage2D(
    context.TEXTURE_2D,
    0,
    context.RGBA,
    size,
    size,
    0,
    context.RGBA,
    context.UNSIGNED_BYTE,
    null,
  );

  context.texParameteri(
    context.TEXTURE_2D,
    context.TEXTURE_MIN_FILTER,
    context.NEAREST,
  );

  context.texParameteri(
    context.TEXTURE_2D,
    context.TEXTURE_MAG_FILTER,
    context.NEAREST,
  );

  context.texParameteri(
    context.TEXTURE_2D,
    context.TEXTURE_WRAP_S,
    context.CLAMP_TO_EDGE,
  );

  context.texParameteri(
    context.TEXTURE_2D,
    context.TEXTURE_WRAP_T,
    context.CLAMP_TO_EDGE,
  );

  return texture;
};
