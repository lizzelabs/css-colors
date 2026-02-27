import type { HSL, Position } from '@/types';

export function hslToCoordinates(
  color: HSL,
  center: Position,
  radius: number,
): Position {
  const theta = ((color.hue - 180) * Math.PI) / 180;
  const r = (color.saturation / 100) * radius;

  return {
    x: center.x + r * Math.cos(theta),
    y: center.y + r * Math.sin(theta),
  };
}
