// src/renderer/components/Player.tsx
import { useState } from 'react';
import {
  PlayIcon,
  PauseIcon,
  RewindIcon,
  FastForwardIcon,
  VolumeUpIcon,
} from '@heroicons/react/solid';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [progress, setProgress] = useState(30);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className='h-20 bg-zinc-800 border-t border-zinc-700 flex items-center px-4'>
      {/* Track Info */}
      <div className='flex items-center w-1/3'>
        <img
          src='https://via.placeholder.com/60'
          alt='Album art'
          className='h-14 w-14 object-cover rounded-md mr-4'
        />
        <div>
          <h4 className='text-sm font-medium'>Song Title</h4>
          <p className='text-xs text-zinc-400'>Artist Name</p>
        </div>
      </div>

      {/* Playback Controls */}
      <div className='flex flex-col items-center w-1/3'>
        <div className='flex items-center space-x-6'>
          <button className='text-zinc-400 hover:text-white'>
            <RewindIcon className='w-5 h-5' />
          </button>
          <button
            className='bg-white rounded-full p-2 text-black hover:scale-105 transition-transform'
            onClick={togglePlay}
          >
            {isPlaying ? (
              <PauseIcon className='w-5 h-5' />
            ) : (
              <PlayIcon className='w-5 h-5' />
            )}
          </button>
          <button className='text-zinc-400 hover:text-white'>
            <FastForwardIcon className='w-5 h-5' />
          </button>
        </div>

        <div className='w-full flex items-center space-x-2 mt-2'>
          <span className='text-xs text-zinc-400'>1:23</span>
          <div className='h-1 flex-1 bg-zinc-600 rounded-full'>
            <div
              className='h-full bg-white rounded-full'
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className='text-xs text-zinc-400'>3:45</span>
        </div>
      </div>

      {/* Volume Control */}
      <div className='w-1/3 flex justify-end items-center'>
        <VolumeUpIcon className='w-5 h-5 text-zinc-400 mr-2' />
        <div className='w-24 h-1 bg-zinc-600 rounded-full'>
          <div
            className='h-full bg-white rounded-full'
            style={{ width: `${volume}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
