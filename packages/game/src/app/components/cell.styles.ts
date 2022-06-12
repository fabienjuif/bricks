import { createUseStyles } from 'react-jss';
import { CellProps } from './cell.component';
import { getItemStyles } from './util';

type RuleNames = 'cell';

export const useStyles = createUseStyles<RuleNames, CellProps>({
  cell: (props) => ({
    height: '3em',
    width: '3em',
    border: '1px solid gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...getItemStyles(props.item),
  }),
});
