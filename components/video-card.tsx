'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  channel: {
    name: string;
    avatar: string;
  };
  views: number;
  uploadedAt: Date;
}

export function VideoCard({
  id,
  title,
  thumbnail,
  channel,
  views,
  uploadedAt,
}: VideoCardProps) {
  return (
    <Link href={`/watch/${id}`}>
      <Card className="overflow-hidden border-0 bg-transparent transition-transform hover:scale-[1.02]">
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex gap-3 p-3">
          <div className="h-9 w-9 shrink-0">
            <Image
              src={channel.avatar}
              alt={channel.name}
              width={36}
              height={36}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="line-clamp-2 text-sm font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{channel.name}</p>
            <p className="text-xs text-muted-foreground">
              {views.toLocaleString()} views •{' '}
              {formatDistanceToNow(uploadedAt, { addSuffix: true })}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}