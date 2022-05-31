import { Coord } from './types';

export function cellEqual({ x, y }: Coord) {
  return (cell: Coord) => cell.x === x && cell.y === y;
}
