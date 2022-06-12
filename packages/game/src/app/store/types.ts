export interface Coord {
  x: number;
  y: number;
}

export enum ItemType {
  red,
  blue,
  green,
}

export interface Item {
  id: string;
  code: ItemType;
}

export interface Cell extends Coord {
  isHighlighted?: boolean;
  item?: Item;
}

export type ItemCell = Item & Cell;

export interface Grid {
  id: string;
  cells: Cell[];
  width: number;
  height: number;
}

export interface GameStore {
  // state
  debug: {
    enable: boolean;
  };
  nextItem?: Item;
  grids: Grid[];
  // - random
  seed?: string;
  randomEngineState?: object;

  // actions
  putItem: (options: { grid: Pick<Grid, 'id'>; cell: Coord }) => Promise<void>;
  init: (options: {
    width: number;
    height: number;
    gridsCount: number;
    seed?: string;
  }) => void;
  revealNextItem: () => Item;
  // - random
  random(min: number, max: number): number;
}
