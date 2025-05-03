
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type Story = {
  id: string;
  username: string;
  avatar: string;
  hasUnseenStory: boolean;
};

const mockStories: Story[] = [
  {
    id: '1',
    username: 'your_story',
    avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    hasUnseenStory: false,
  },
  {
    id: '2',
    username: 'john_doe',
    avatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    hasUnseenStory: true,
  },
  {
    id: '3',
    username: 'jane_smith',
    avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    hasUnseenStory: true,
  },
  {
    id: '4',
    username: 'tech_guru',
    avatar: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    hasUnseenStory: true,
  },
  {
    id: '5',
    username: 'travel_lover',
    avatar: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    hasUnseenStory: true,
  },
  {
    id: '6',
    username: 'nature_pic',
    avatar: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    hasUnseenStory: true,
  },
  {
    id: '7',
    username: 'cat_videos',
    avatar: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    hasUnseenStory: true,
  },
  {
    id: '8',
    username: 'food_pics',
    avatar: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    hasUnseenStory: true,
  },
];

const StoryItem = ({ story }: { story: Story }) => {
  const borderClass = story.hasUnseenStory
    ? 'bg-gradient-to-tr from-social-primary to-social-secondary p-[2px] rounded-full'
    : 'p-[2px]';

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className={borderClass}>
        <div className="bg-white p-[2px] rounded-full">
          <Avatar className="h-16 w-16">
            <AvatarImage src={story.avatar} alt={story.username} />
            <AvatarFallback>{story.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <span className="text-xs truncate max-w-[70px]">{story.username}</span>
    </div>
  );
};

const Stories = () => {
  return (
    <div className="bg-white py-4">
      <div className="flex space-x-4 px-4 overflow-x-auto scrollbar-hide pb-2">
        {mockStories.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
