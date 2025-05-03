
import React from 'react';
import GardenHeader from '@/components/GardenHeader';
import Hero from '@/components/Hero';

const Plants = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <GardenHeader />
      
      <Hero 
        title="Florida Native Plants" 
        imageSrc="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
        description="Discover the diverse plant life native to Florida's unique ecosystem"
      />
      
      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8">Florida's Diverse Plant Life</h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Florida's unique climate creates the perfect environment for a wide variety of plant species. 
            From coastal dunes to inland swamps, the state's diverse ecosystems support an incredible range of flora.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Native Wildflowers</h3>
              <p className="mb-4">
                Florida's native wildflowers add splashes of color throughout the state. Species like 
                the Blanketflower, Coreopsis (Florida's state wildflower), and Beach Sunflower thrive 
                in the warm climate and sandy soils.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
                alt="Florida wildflowers"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3">Tropical Plants</h3>
              <p className="mb-4">
                Southern Florida's subtropical climate supports many tropical plants. Colorful varieties like 
                Hibiscus, Bird of Paradise, and Bougainvillea bring a tropical flair to many Florida gardens.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
                alt="Tropical plants"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
          
          <div className="bg-garden-light p-6 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-3">Native Plant Gardening Tips</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Choose plants native to your specific region of Florida for best results</li>
              <li>Group plants with similar water and light requirements</li>
              <li>Create layers with groundcovers, shrubs, and trees</li>
              <li>Incorporate water features to attract wildlife</li>
              <li>Use mulch to retain moisture and suppress weeds</li>
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

export default Plants;
