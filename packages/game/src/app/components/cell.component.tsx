import cn from 'classnames';
import { useSpring, animated, config } from 'react-spring';
import { Cell as CellType, Item, useStore } from '../store';
import { useStyles } from './cell.styles';

export type CellProps = CellType & {
  /** Used for style */
  item?: Item;
  putItem: () => void;
};

export function Cell(props: CellProps) {
  const { x, y, isHighlighted, putItem } = props;

  const classes = useStyles(props);

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
      className={cn(classes.cell)}
    >
      {debug.enable && `${x}:${y}`}
    </animated.div>
  );
}
