export const makeShader = (
  context: WebGL2RenderingContext | WebGLRenderingContext,
  type: GLenum,
  source: string,
): WebGLShader => {
  const shader = context.createShader(type);

  if (shader === null) {
    throw new Error(`This browser is not supported!`);
  }

  context.shaderSource(shader, source);
  context.compileShader(shader);

  if (context.getShaderParameter(shader, context.COMPILE_STATUS)) {
    return shader;
  } else {
    const info = context.getShaderInfoLog(shader);
    context.deleteShader(shader);
    throw new Error(`Make Shader::: ${info}`);
  }
};
