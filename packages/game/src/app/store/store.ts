import { nanoid } from 'nanoid';
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { WritableDraft } from 'immer/dist/types/types-external';
import { wait } from '@bricks/util';
import { Coord, GameState, Grid } from './types';
import { cellEqual } from './helpers';

const getGrid = (state: WritableDraft<GameState>, grid: Pick<Grid, 'id'>) => {
  const innerGrid = state.grids.find(({ id }) => id === grid.id);
  if (!innerGrid) throw new Error(`Grid not found: ${grid.id}`);
  return innerGrid;
};

const getCell = (cell: Coord, grid: Grid) => {
  const localCell = grid.cells.find(cellEqual(cell));
  if (!localCell) {
    throw new Error(
      `Cell not found x=${cell.x};y=${cell.y} for grid id=${grid.id}`,
    );
  }
  return localCell;
};

export const useStore = create<GameState>()(
  devtools(
    immer((set, get) => ({
      debug: {
        enable: true,
      },
      nextItem: undefined,
      grids: [],
      init: ({ width, height, gridsCount }) => {
        if (get().grids.length > 0) return;

        set((state) => {
          state.nextItem = { code: 'blue', id: nanoid() };

          const oneGrid: Omit<Grid, 'id'> = {
            width,
            height,
            cells: Array.from({ length: height }).flatMap((_, y) =>
              Array.from({ length: width }).map((_, x) => ({ x, y })),
            ),
          };

          for (let g = 0; g < gridsCount; g += 1) {
            state.grids.push({
              ...(JSON.parse(JSON.stringify(oneGrid)) as typeof oneGrid),
              id: String(g),
            });
          }
        });
      },
      putItem: async ({ grid, cell }) => {
        set((state) => {
          const innerGrid = getGrid(state, grid);
          const innerCell = getCell(cell, innerGrid);

          if (!state.nextItem) {
            console.warn(`No item to put`, { grid, cell });
            return;
          }

          innerCell.isHighlighted = true;
          innerCell.item = {
            ...state.nextItem,
          };

          state.nextItem = {
            code: state.nextItem.code === 'blue' ? 'red' : 'blue',
            id: nanoid(),
          };
        });
        await wait(1000);
        set((state) => {
          const innerCell = getCell(cell, getGrid(state, grid));
          innerCell.isHighlighted = false;
        });
      },
    })),
  ),
);
