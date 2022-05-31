import { createUseStyles } from 'react-jss';
import { CellProps } from './cell.component';

type RuleNames = 'cell' | 'item';

export const useStyles = createUseStyles<RuleNames, CellProps>({
  cell: {
    height: '3em',
    width: '3em',
    border: '1px solid gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    '&.red': {
      backgroundColor: 'red',
    },
    '&.blue': {
      backgroundColor: 'blue',
    },
  },
});
