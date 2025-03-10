import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import PlaylistPage from './pages/PlaylistPage';
import Layout from './components/Layout';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='playlist/:id' element={<PlaylistPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
