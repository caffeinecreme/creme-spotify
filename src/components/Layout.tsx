// src/renderer/components/Layout.tsx
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Player from './Player';
import TitleBar from './TitleBar';

const Layout = () => {
  return (
    <div className='flex flex-col h-screen bg-zinc-900 text-white font-museo'>
      <TitleBar />
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <main className='flex-1 overflow-auto p-6'>
          <Outlet />
        </main>
      </div>
      <Player />
    </div>
  );
};

export default Layout;
