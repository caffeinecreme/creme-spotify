// src/renderer/pages/PlaylistPage.tsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ClockIcon, PlayIcon } from '@heroicons/react/solid';

type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
};

const PlaylistPage = () => {
  const { id } = useParams<{ id: string }>();
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    // Placeholder data - this would come from Spotify API later
    const placeholderTracks = [
      {
        id: '1',
        title: 'Track One',
        artist: 'Artist 1',
        album: 'Album 1',
        duration: '3:24',
      },
      {
        id: '2',
        title: 'Track Two',
        artist: 'Artist 2',
        album: 'Album 2',
        duration: '2:45',
      },
      {
        id: '3',
        title: 'Track Three',
        artist: 'Artist 3',
        album: 'Album 3',
        duration: '4:12',
      },
      {
        id: '4',
        title: 'Track Four',
        artist: 'Artist 4',
        album: 'Album 4',
        duration: '3:10',
      },
      {
        id: '5',
        title: 'Track Five',
        artist: 'Artist 5',
        album: 'Album 5',
        duration: '3:50',
      },
    ];

    setTracks(placeholderTracks);
  }, [id]);

  return (
    <div>
      <div className='flex items-end space-x-6 mb-6'>
        <img
          src='https://via.placeholder.com/200'
          alt='Playlist cover'
          className='w-60 h-60 object-cover shadow-lg'
        />
        <div>
          <p className='uppercase text-sm font-medium'>Playlist</p>
          <h1 className='text-5xl font-bold mt-2 mb-4'>Playlist Name</h1>
          <p className='text-zinc-400'>Created by User • 5 songs, 16 min</p>
        </div>
      </div>

      <div className='mt-8'>
        <button className='bg-green-500 text-black rounded-full p-3 hover:bg-green-400 transition-colors'>
          <PlayIcon className='w-8 h-8' />
        </button>

        <table className='w-full mt-6'>
          <thead>
            <tr className='border-b border-zinc-700 text-zinc-400 text-left'>
              <th className='pb-2 w-12'>#</th>
              <th className='pb-2'>Title</th>
              <th className='pb-2'>Album</th>
              <th className='pb-2 text-right pr-4'>
                <ClockIcon className='w-5 h-5 inline' />
              </th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track, index) => (
              <tr key={track.id} className='hover:bg-zinc-800/50 group'>
                <td className='py-3 text-zinc-400'>{index + 1}</td>
                <td>
                  <div className='flex items-center'>
                    <div>
                      <p className='font-medium'>{track.title}</p>
                      <p className='text-zinc-400 text-sm'>{track.artist}</p>
                    </div>
                  </div>
                </td>
                <td className='text-zinc-400'>{track.album}</td>
                <td className='text-zinc-400 text-right pr-4'>
                  {track.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaylistPage;
