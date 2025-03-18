'use client';

import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown, Share2, Flag } from 'lucide-react';

interface VideoActionsProps {
  likes: number;
}

export function VideoActions({ likes }: VideoActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button variant="secondary" className="gap-2">
        <ThumbsUp className="h-4 w-4" />
        {likes.toLocaleString()}
      </Button>
      <Button variant="secondary" className="gap-2">
        <ThumbsDown className="h-4 w-4" />
      </Button>
      <Button variant="secondary">
        <Share2 className="h-4 w-4" />
      </Button>
      <Button variant="ghost">
        <Flag className="h-4 w-4" />
      </Button>
    </div>
  );
} 