import cn from 'classnames';
import { Item } from '../store';
import { useStyles } from './nextItem.styles';

export type NextItemProps = Item;

export function NextItem(props: NextItemProps) {
  const classes = useStyles(props);

  return <div className={cn(classes.item)} />;
}
