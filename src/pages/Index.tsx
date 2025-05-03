
import React from 'react';
import Header from '@/components/Header';
import Stories from '@/components/Stories';
import Feed from '@/components/Feed';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-300 via-pink-200 to-blue-300 bg-fixed">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 z-0"></div>
      <div className="absolute inset-0 z-10">
        <Header />
        <div className="max-w-lg mx-auto pt-16">
          <Stories />
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Index;
