import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const timeAgo = (date: string): string => {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return 'Invalid date string';

  const seconds = Math.floor((Date.now() - parsedDate.getTime()) / 1000);
  const units = [
      { name: 'year', secs: 31536000 },
      { name: 'month', secs: 2592000 },
      { name: 'week', secs: 604800 },
      { name: 'day', secs: 86400 },
      { name: 'hour', secs: 3600 },
      { name: 'minute', secs: 60 },
      { name: 'second', secs: 1 },
  ];

  const unit = units.find(({ secs }) => seconds >= secs);

  if (unit) {
      const count = Math.floor(seconds / unit.secs);
      return `${count} ${unit.name}${count > 1 ? 's' : ''} ago`;
  }

  return 'just now';
};
