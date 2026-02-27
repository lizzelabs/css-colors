export const makeGlslProgram = (
  context: WebGL2RenderingContext,
  vertex: WebGLShader,
  source: WebGLShader,
): WebGLProgram => {
  const program = context.createProgram();
  context.attachShader(program, vertex);
  context.attachShader(program, source);
  context.linkProgram(program);

  if (context.getProgramParameter(program, context.LINK_STATUS)) {
    return program;
  } else {
    const info = context.getProgramInfoLog(program);
    context.deleteProgram(program);
    throw new Error(`Wheel: ${info}`);
  }
};
