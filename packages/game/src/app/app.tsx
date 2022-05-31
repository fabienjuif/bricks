import { Route, Routes } from 'react-router-dom';
import { Game } from './screens';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
    </Routes>
  );
}

export default App;
