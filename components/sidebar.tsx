'use client';

import { cn } from '@/lib/utils';
import {
  Home,
  Compass,
  Clock,
  ThumbsUp,
  PlaySquare,
  History,
  ListVideo,
  Settings,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Compass, label: 'Explore', href: '/explore' },
  { icon: Clock, label: 'Shorts', href: '/shorts' },
  { icon: ListVideo, label: 'Subscriptions', href: '/subscriptions' },
  { icon: PlaySquare, label: 'Library', href: '/library' },
  { icon: History, label: 'History', href: '/history' },
  { icon: ThumbsUp, label: 'Liked Videos', href: '/liked' },
];

const bottomItems = [
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: HelpCircle, label: 'Help', href: '/help' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex h-[calc(100vh-4rem)] w-64 flex-col fixed left-0 top-16 p-4 border-r">
      <div className="flex flex-col flex-1 gap-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent',
              pathname === item.href ? 'bg-accent' : 'transparent'
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2 border-t pt-2">
        {bottomItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent"
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}