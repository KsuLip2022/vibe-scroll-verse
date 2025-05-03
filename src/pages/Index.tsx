
import React from 'react';
import Header from '@/components/Header';
import Stories from '@/components/Stories';
import Feed from '@/components/Feed';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-lg mx-auto">
        <Stories />
        <Feed />
      </div>
    </div>
  );
};

export default Index;
