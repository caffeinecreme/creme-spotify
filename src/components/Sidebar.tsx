import Card from './Card';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  return (
    <aside className='w-80 bg-pink-100 flex flex-col border-r border-pink-500'>
      {isMac && <div className='h-6'></div>}

      <div className='p-4'>
        <div className='border-1 border-pink-500 p-3 rounded-2xl bg-pink-300'>
          <h1 className='text-xl font-bold text-pink-500'>
            caffeinecreme's favorites
          </h1>
        </div>
      </div>

      <nav className='flex-1'>
        <div className='mt-2 px-4'>
          <Card />
          <Card />
          <Card />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
