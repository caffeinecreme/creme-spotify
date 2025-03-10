// src/renderer/pages/HomePage.tsx
import { useEffect, useState } from 'react';

type Album = {
  id: string;
  title: string;
  artist: string;
  cover: string;
};

const HomePage = () => {
  const [recentlyPlayed, setRecentlyPlayed] = useState<Album[]>([]);
  const [recommendations, setRecommendations] = useState<Album[]>([]);

  useEffect(() => {
    // Placeholder data - this would come from Spotify API later
    const placeholderData = [
      {
        id: '1',
        title: 'Album One',
        artist: 'Artist 1',
        cover: 'https://via.placeholder.com/150',
      },
      {
        id: '2',
        title: 'Album Two',
        artist: 'Artist 2',
        cover: 'https://via.placeholder.com/150',
      },
      {
        id: '3',
        title: 'Album Three',
        artist: 'Artist 3',
        cover: 'https://via.placeholder.com/150',
      },
      {
        id: '4',
        title: 'Album Four',
        artist: 'Artist 4',
        cover: 'https://via.placeholder.com/150',
      },
      {
        id: '5',
        title: 'Album Five',
        artist: 'Artist 5',
        cover: 'https://via.placeholder.com/150',
      },
    ];

    setRecentlyPlayed(placeholderData);
    setRecommendations(placeholderData);
  }, []);

  return (
    <div className='space-y-8'>
      <h1 className='text-3xl font-bold'>Good afternoon</h1>

      <section>
        <h2 className='text-xl font-bold mb-4'>Recently played</h2>
        <div className='grid grid-cols-5 gap-6'>
          {recentlyPlayed.map((album) => (
            <div
              key={album.id}
              className='bg-zinc-800 p-4 rounded-md hover:bg-zinc-700 transition-colors'
            >
              <img
                src={album.cover}
                alt={album.title}
                className='w-full aspect-square object-cover rounded-md mb-4'
              />
              <h3 className='font-medium truncate'>{album.title}</h3>
              <p className='text-zinc-400 text-sm truncate'>{album.artist}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className='text-xl font-bold mb-4'>Recommended for you</h2>
        <div className='grid grid-cols-5 gap-6'>
          {recommendations.map((album) => (
            <div
              key={album.id}
              className='bg-zinc-800 p-4 rounded-md hover:bg-zinc-700 transition-colors'
            >
              <img
                src={album.cover}
                alt={album.title}
                className='w-full aspect-square object-cover rounded-md mb-4'
              />
              <h3 className='font-medium truncate'>{album.title}</h3>
              <p className='text-zinc-400 text-sm truncate'>{album.artist}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
