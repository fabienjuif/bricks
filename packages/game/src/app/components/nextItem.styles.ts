import { createUseStyles } from 'react-jss';
import { getItemStyles } from './util';
import { NextItemProps } from './nextItem.component';

type RuleNames = 'item';

export const useStyles = createUseStyles<RuleNames, NextItemProps>({
  item: (props) => ({
    width: '4em',
    height: '4em',
    border: '1px solid grey',
    ...getItemStyles(props),
  }),
});
