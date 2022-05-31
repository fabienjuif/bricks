import { createUseStyles } from 'react-jss';
import { Property } from 'csstype';
import { NextItemProps } from './nextItem.component';

type RuleNames = 'item';

function getColor({ code }: NextItemProps): Property.BackgroundColor {
  switch (code) {
    case 'red':
      return 'red';
    case 'blue':
      return 'blue';
    default:
      return 'pink';
  }
}

export const useStyles = createUseStyles<RuleNames, NextItemProps>({
  item: {
    width: '4em',
    height: '4em',
    backgroundColor: getColor,
    border: '1px solid grey',
  },
});
