import { useSpring, animated } from 'react-spring';
import { useStore } from '../store';
import { Cell } from './cell.container';

export interface GridProps {
  index: number;
}

export function Grid({ index }: GridProps) {
  const style = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const grid = useStore((state) => state.grids[index]);

  return (
    <animated.table
      style={{
        ...style,
        margin: 'auto',
      }}
    >
      <tbody>
        {Array.from({ length: grid.width }).map((_, y) => (
          <animated.tr key={y}>
            {Array.from({ length: grid.width }).map((_, x) => (
              <td key={x}>
                <Cell x={x} y={y} gridId={grid.id} />
              </td>
            ))}
          </animated.tr>
        ))}
      </tbody>
    </animated.table>
  );
}
