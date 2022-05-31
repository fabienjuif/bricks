export interface Coord {
  x: number;
  y: number;
}

export interface Item {
  id: string;
  code: string;
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

export interface GameState {
  debug: {
    enable: boolean;
  };
  nextItem?: Item;
  grids: Grid[];
  putItem: (options: { grid: Pick<Grid, 'id'>; cell: Coord }) => Promise<void>;
  init: (options: {
    width: number;
    height: number;
    gridsCount: number;
  }) => void;
}
