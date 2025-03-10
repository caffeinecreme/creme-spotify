// src/renderer/components/TitleBar.tsx
import { useEffect, useState } from 'react';
import './styles.css';

const TitleBar = ({ title = 'Music Player' }) => {
  const [platform, setPlatform] = useState<
    'mac' | 'windows' | 'linux' | 'unknown'
  >('unknown');

  useEffect(() => {
    const platform = navigator.platform.toLowerCase();
    if (platform.includes('mac')) setPlatform('mac');
    else if (platform.includes('win')) setPlatform('windows');
    else if (platform.includes('linux')) setPlatform('linux');
  }, []);

  return (
    <div
      className={`h-10 bg-pink-100 flex items-center border-pink-500 border-b-1 ${
        platform === 'mac' ? 'justify-center' : 'justify-between'
      } drag`}
    >
      {platform !== 'mac' && (
        <div className='flex-none w-24 pl-2'>
          {/* Windows/Linux controls */}
          <div className='flex space-x-2 no-drag'>
            <button /* ... */></button>
            {/* ... */}
          </div>
        </div>
      )}

      <div
        className={`text-pink-500 text-xs font-medium no-drag ${
          platform === 'mac' ? 'flex-grow text-center' : 'flex-1 text-center'
        }`}
      >
        {title}
      </div>

      {platform !== 'mac' && <div className='flex-none w-24'></div>}
    </div>
  );
};

export default TitleBar;
