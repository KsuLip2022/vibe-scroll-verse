
import React from 'react';
import GardenHeader from '@/components/GardenHeader';
import Hero from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';

const Trees = () => {
  const trees = [
    {
      id: 1,
      name: 'Lemon Tree',
      latinName: 'Citrus limon',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      description: 'Lemon trees are a popular choice for Florida gardens, producing fragrant blooms and tangy fruit. They thrive in the warm Florida climate and can produce fruit year-round in optimal conditions.'
    },
    {
      id: 2,
      name: 'Royal Poinciana (Royal Delonix)',
      latinName: 'Delonix regia',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      description: 'Often called the "Flame Tree," the Royal Poinciana is famous for its spectacular display of fiery red-orange blooms. This majestic tree can reach heights of 40 feet and creates a stunning umbrella-shaped canopy.'
    },
    {
      id: 3,
      name: 'Orchid Tree',
      latinName: 'Bauhinia variegata',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      description: 'The Orchid Tree produces stunning orchid-like flowers in shades of pink, purple, and white. Native to Southeast Asia, these trees adapt well to Florida\'s climate and can reach heights of 20-30 feet.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <GardenHeader />
      
      <Hero 
        title="Florida's Beautiful Trees" 
        imageSrc="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
        description="Explore the lush canopy of lemon trees, royal delonyx, and orchid trees"
      />
      
      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Trees</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trees.map(tree => (
            <Card key={tree.id} className="overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={tree.image} 
                  alt={tree.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-1">{tree.name}</h3>
                <p className="text-gray-500 italic mb-4">{tree.latinName}</p>
                <p className="text-gray-700">{tree.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="prose max-w-none">
          <h3 className="text-2xl font-semibold mb-4">Caring for Trees in Florida</h3>
          <p className="mb-6">
            Florida's unique climate presents both advantages and challenges for growing trees. Here are 
            some tips to help your trees thrive in the Sunshine State:
          </p>
          
          <div className="bg-garden-light p-6 rounded-lg mb-6">
            <h4 className="text-xl font-semibold mb-3">Planting Tips</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Plant during the cooler months (October to March) to reduce transplant shock</li>
              <li>Consider the mature size of the tree when selecting a planting location</li>
              <li>Dig a hole twice as wide but no deeper than the root ball</li>
              <li>Water thoroughly after planting and apply 2-3 inches of mulch</li>
            </ul>
          </div>
          
          <div className="bg-garden-light p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-3">Ongoing Care</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Water deeply but infrequently to encourage deep root growth</li>
              <li>Fertilize during the growing season, following specific recommendations for your tree species</li>
              <li>Prune regularly to maintain shape and remove damaged branches</li>
              <li>Watch for signs of pests and diseases common in Florida</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-garden-primary text-white mt-auto py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Gardens of Florida. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Trees;
