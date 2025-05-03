
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Post, { PostType } from './Post';

const initialPosts: PostType[] = [
  {
    id: '1',
    user: {
      username: 'john_doe',
      avatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    },
    content: {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      caption: 'Beautiful sunset at the lake 🌅',
    },
    stats: {
      likes: 120,
      comments: 24,
    },
    createdAt: '2 hours ago',
  },
  {
    id: '2',
    user: {
      username: 'jane_smith',
      avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
    content: {
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
      caption: 'My cat being adorable as usual 😺',
    },
    stats: {
      likes: 89,
      comments: 15,
    },
    createdAt: '3 hours ago',
  },
  {
    id: '3',
    user: {
      username: 'tech_guru',
      avatar: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    },
    content: {
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      caption: 'Working on my latest coding project! #devlife',
    },
    stats: {
      likes: 56,
      comments: 8,
    },
    createdAt: '5 hours ago',
  },
];

const generateMorePosts = (startId: number, count: number): PostType[] => {
  return Array(count).fill(null).map((_, index) => {
    const id = startId + index;
    return {
      id: id.toString(),
      user: {
        username: `user_${id}`,
        avatar: `https://images.unsplash.com/photo-${1500000000000 + id}`,
      },
      content: {
        image: `https://images.unsplash.com/photo-${1500100000000 + id}`,
        caption: `This is post number ${id} #vibeshare`,
      },
      stats: {
        likes: Math.floor(Math.random() * 200),
        comments: Math.floor(Math.random() * 50),
      },
      createdAt: `${Math.floor(Math.random() * 24)} hours ago`,
    };
  });
};

const Feed = () => {
  const [posts, setPosts] = useState<PostType[]>(initialPosts);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMorePosts = useCallback(() => {
    if (loading) return;
    
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const newPosts = generateMorePosts(posts.length + 1, 3);
      setPosts(prevPosts => [...prevPosts, ...newPosts]);
      setPage(prevPage => prevPage + 1);
      setLoading(false);
    }, 1000);
  }, [loading, posts.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          loadMorePosts();
        }
      },
      { threshold: 0.5 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loadMorePosts]);

  return (
    <div className="max-w-lg mx-auto pb-20">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
      
      <div ref={loaderRef} className="h-10 flex items-center justify-center">
        {loading && (
          <div className="loader">
            <div className="w-8 h-8 border-4 border-social-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
