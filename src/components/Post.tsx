
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Heart, MessageSquare, Share } from 'lucide-react';

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
    <div className="border border-social-border rounded shadow bg-white mb-4 overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center p-4">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={post.user.avatar} alt={post.user.username} />
          <AvatarFallback>{post.user.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium text-social-secondary">{post.user.username}</div>
          <div className="text-xs text-gray-500">{post.createdAt}</div>
        </div>
      </div>

      {/* Post Caption */}
      <div className="px-4 pb-3">
        <p>{post.content.caption}</p>
      </div>

      {/* Post Image */}
      {post.content.image && (
        <div className="relative">
          <img
            src={post.content.image}
            alt="Post content"
            className="w-full object-cover"
          />
        </div>
      )}

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center gap-1 border-b border-social-border pb-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLike} 
            className={isLiked ? "text-social-primary" : "text-gray-600"}
          >
            <Heart 
              className={`h-5 w-5 mr-2 ${isLiked ? "fill-social-primary" : ""}`} 
            />
            {likeCount}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowComments(!showComments)}
            className="text-gray-600"
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            {post.stats.comments}
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-gray-600"
          >
            <Share className="h-5 w-5 mr-2" />
          </Button>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-3">
            <p className="text-sm text-social-secondary mb-2">Комментарии ({post.stats.comments})</p>
            <form onSubmit={handleCommentSubmit} className="flex mt-2 border border-social-border rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Напишите комментарий..."
                className="flex-1 px-4 py-2 text-sm border-none outline-none"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="sm" 
                disabled={!comment.trim()}
                className="text-social-primary"
              >
                Отправить
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
