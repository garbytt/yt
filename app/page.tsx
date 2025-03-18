import { VideoCard } from '@/components/video-card';

const videos = [
  {
    id: '1',
    title: 'Building a Modern Web Application with Next.js and TypeScript',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    channel: {
      name: 'Tech Insights',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    },
    views: 52000,
    uploadedAt: new Date('2024-03-15'),
  },
  {
    id: '2',
    title: 'The Future of AI: What to Expect in 2024',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    channel: {
      name: 'AI Academy',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
    },
    views: 128000,
    uploadedAt: new Date('2024-03-10'),
  },
  {
    id: '3',
    title: 'Mastering TypeScript: Advanced Tips and Tricks',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    channel: {
      name: 'Code Masters',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    },
    views: 75000,
    uploadedAt: new Date('2024-03-08'),
  },
  // Add more videos as needed
];

export default function Home() {
  return (
    <div className="container py-6 md:py-8 md:ml-64">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
}