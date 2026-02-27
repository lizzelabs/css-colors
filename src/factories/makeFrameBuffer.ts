export const makeFrameBuffer = (
  context: WebGL2RenderingContext,
  texture?: WebGLTexture,
): WebGLFramebuffer => {
  const framebuffer = context.createFramebuffer();

  context.bindFramebuffer(context.FRAMEBUFFER, framebuffer);

  if (texture) {
    context.framebufferTexture2D(
      context.FRAMEBUFFER,
      context.COLOR_ATTACHMENT0,
      context.TEXTURE_2D,
      texture,
      0,
    );
  }

  return framebuffer;
};
