import { Property } from 'csstype';
import { ItemType } from '../../store';

export interface ItemStylesProps {
  code: ItemType;
}

function getColor({ code }: ItemStylesProps): Property.BackgroundColor {
  switch (code) {
    case ItemType.red:
      return 'red';
    case ItemType.blue:
      return 'blue';
    case ItemType.green:
      return 'green';
    default:
      return 'pink';
  }
}

export function getItemStyles(props?: ItemStylesProps) {
  if (!props) return undefined;

  return {
    backgroundColor: getColor(props),
  };
}
