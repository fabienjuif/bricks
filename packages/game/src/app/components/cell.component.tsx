import cn from 'classnames';
import { useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Cell as CellType, Item, useStore } from '../store';
import { useStyles } from './cell.styles';

export type CellProps = CellType & {
  item?: Item;
  putItem: () => void;
};

export function Cell({ x, y, isHighlighted, item, putItem }: CellProps) {
  const classes = useStyles();

  // FIXME: use context
  const debug = useStore((state) => state.debug);

  const { o } = useSpring({
    reset: true,
    o: isHighlighted ? 1 : 0,
    config: config.wobbly,
    immediate: !isHighlighted,
  });

  return (
    <animated.div
      style={{
        transform: o
          .to([0, 0.5, 1], [0, 10, 0])
          .to((z) => `rotateZ(${z.toFixed(0)}deg)`),
      }}
      onClick={putItem}
      className={cn(classes.cell, item && classes.item, item?.code)}
    >
      {debug.enable && `${x}:${y}`}
    </animated.div>
  );
}
