
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Heart, MessageSquare, Image } from 'lucide-react';

export type PostType = {
  id: string;
  user: {
    username: string;
    avatar: string;
  };
  content: {
    image: string;
    caption: string;
  };
  stats: {
    likes: number;
    comments: number;
  };
  createdAt: string;
};

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.stats.likes);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      // In a real app, we would submit the comment to the server
      setComment('');
    }
  };

  return (
    <div className="border border-social-border rounded-md bg-white mb-4 overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center p-4">
        <Avatar className="h-8 w-8 mr-3">
          <AvatarImage src={post.user.avatar} alt={post.user.username} />
          <AvatarFallback>{post.user.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{post.user.username}</span>
      </div>

      {/* Post Image */}
      <div className="relative aspect-square">
        <img
          src={post.content.image}
          alt="Post content"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLike} 
            className={isLiked ? "text-red-500" : ""}
          >
            <Heart 
              className={`h-6 w-6 ${isLiked ? "fill-red-500" : ""} ${isLiked ? "animate-heart-beat" : ""}`} 
            />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setShowComments(!showComments)}
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        </div>

        {/* Post Stats */}
        <div className="mt-2">
          <p className="font-medium">{likeCount} likes</p>
        </div>

        {/* Post Caption */}
        <div className="mt-1">
          <span className="font-medium">{post.user.username}</span>{" "}
          <span>{post.content.caption}</span>
        </div>

        {/* Post Time */}
        <div className="mt-1">
          <span className="text-sm text-gray-500">{post.createdAt}</span>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">View all {post.stats.comments} comments</p>
            <form onSubmit={handleCommentSubmit} className="flex gap-2">
              <input
                type="text"
                placeholder="Add a comment..."
                className="flex-1 bg-transparent border-none outline-none text-sm"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button type="submit" variant="ghost" size="sm" disabled={!comment.trim()}>
                Post
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
