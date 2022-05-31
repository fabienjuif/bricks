import { useStore, Grid, cellEqual, Coord } from '../store';
import { Cell as Component } from './cell.component';

export interface CellProps extends Coord {
  gridId: Grid['id'];
}

export function Cell({ gridId, ...props }: CellProps) {
  const putItem = useStore((state) => state.putItem);
  const grid = useStore((state) => state.grids.find(({ id }) => gridId === id));

  if (!grid) return null;

  const cell = grid.cells.find(cellEqual(props));
  if (!cell) return null;

  return (
    <Component
      {...cell}
      putItem={() =>
        putItem({
          grid: { id: gridId },
          cell: { x: props.x, y: props.y },
        })
      }
    />
  );
}
