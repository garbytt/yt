import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';
import { VideoCard } from '@/components/video-card';
import { VideoActions } from './video-actions';

// 動的パラメータを生成する関数を追加
export async function generateStaticParams() {
  // ここでは仮のデータを使用していますが、実際のデータソースから取得するように変更してください
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    // 必要に応じて他のIDを追加
  ];
}

const video = {
  id: '1',
  title: 'Building a Modern Web Application with Next.js and TypeScript',
  description: 'Learn how to build a modern web application using Next.js and TypeScript. We\'ll cover everything from setup to deployment, including best practices and advanced features.',
  views: 52000,
  likes: 2800,
  uploadedAt: new Date('2024-03-15'),
  channel: {
    name: 'Tech Insights',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    subscribers: '120K',
  },
};

const relatedVideos = [
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
  // Add more related videos
];

export default function WatchPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-6 md:py-8 md:ml-64">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Video Player */}
          <div className="aspect-video w-full rounded-lg bg-black mb-4"></div>
          
          {/* Video Info */}
          <h1 className="text-xl font-bold mb-4">{video.title}</h1>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={video.channel.avatar} />
                <AvatarFallback>{video.channel.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{video.channel.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {video.channel.subscribers} subscribers
                </p>
              </div>
              <Button className="ml-4">Subscribe</Button>
            </div>
            
            <VideoActions likes={video.likes} />
          </div>
          
          <Card className="p-4">
            <div className="flex gap-2 text-sm text-muted-foreground mb-2">
              <span>{video.views.toLocaleString()} views</span>
              <span>•</span>
              <span>{formatDistanceToNow(video.uploadedAt, { addSuffix: true })}</span>
            </div>
            <p className="text-sm whitespace-pre-line">{video.description}</p>
          </Card>
        </div>
        
        {/* Related Videos */}
        <div className="space-y-4">
          <h2 className="font-semibold mb-4">Related Videos</h2>
          {relatedVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}