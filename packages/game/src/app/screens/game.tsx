import cn from 'classnames';
import { useEffect } from 'react';
import { Grid, NextItem } from '../components';
import { useStore } from '../store';
import { useStyles } from './game.style';

export function Game() {
  const classes = useStyles();
  const init = useStore((state) => state.init);
  const gridsCount = useStore((state) => state.grids.length);

  useEffect(() => {
    init({ width: 4, height: 4, gridsCount: 3 });
  }, [init]);

  return (
    <div className={cn(classes.game)}>
      <NextItem />

      <div className={cn(classes.grid)}>
        {Array.from({ length: gridsCount }).map((_, index) => (
          <Grid index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
