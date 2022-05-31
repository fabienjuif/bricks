import { createUseStyles } from 'react-jss';

type RuleNames = 'game' | 'grid';

export const useStyles = createUseStyles<RuleNames>({
  game: {
    display: 'flex',
    flexDirection: 'column',
  },
  grid: {
    display: 'flex',
  },
});
