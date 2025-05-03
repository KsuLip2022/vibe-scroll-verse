
import React from 'react';
import GardenHeader from '@/components/GardenHeader';
import Hero from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Roses = () => {
  const roses = [
    {
      id: 1,
      name: 'Red Eden',
      color: 'Deep red',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      description: 'A climbing rose variety known for its rich red color and abundant blooms. Red Eden roses are repeat bloomers that can reach impressive heights when properly supported, making them perfect for trellises and garden walls.'
    },
    {
      id: 2,
      name: 'Fragrance Cloud',
      color: 'Coral red',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      description: 'True to its name, this hybrid tea rose produces an intense, sweet fragrance. The blooms display a beautiful coral-red color and have excellent form, making them popular for cut flower arrangements.'
    },
    {
      id: 3,
      name: 'Princess de Monaco',
      color: 'Ivory white with pink edges',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      description: 'This elegant hybrid tea rose features ivory-white petals delicately edged with pink. The classic, high-centered blooms have a sweet fragrance and are supported by long, strong stems ideal for cutting.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <GardenHeader />
      
      <Hero 
        title="Beautiful Rose Varieties" 
        imageSrc="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
        description="Discover the exquisite beauty of Red Eden, Fragrance Cloud, and Princess de Monaco roses"
      />
      
      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Roses</h2>
        
        <Tabs defaultValue="varieties" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="varieties">Rose Varieties</TabsTrigger>
            <TabsTrigger value="care">Rose Care</TabsTrigger>
          </TabsList>
          
          <TabsContent value="varieties">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roses.map(rose => (
                <Card key={rose.id} className="overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={rose.image} 
                      alt={rose.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-1">{rose.name}</h3>
                    <p className="text-garden-rose font-medium mb-4">{rose.color}</p>
                    <p className="text-gray-700">{rose.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="care">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Growing Beautiful Roses in Florida</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-garden-primary">Planting</h4>
                  <p className="mb-3">
                    Plant roses in areas that receive at least 6 hours of direct sunlight daily. In Florida, 
                    morning sun and afternoon shade can help protect blooms from the intense heat.
                  </p>
                  <p>
                    The best time to plant roses in Florida is during the cooler months of October through March. 
                    Prepare the soil by adding organic matter and ensure good drainage.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-garden-primary">Watering</h4>
                  <p>
                    Water deeply 1-2 times per week rather than frequent shallow watering. Use drip irrigation 
                    or soaker hoses to keep foliage dry and reduce disease risk. During Florida's rainy season, 
                    monitor soil moisture and adjust watering accordingly.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-garden-primary">Fertilizing</h4>
                  <p>
                    Florida's sandy soils benefit from regular fertilization. Use a rose-specific fertilizer 
                    every 4-6 weeks during the growing season. Stop fertilizing about 8 weeks before the first frost 
                    to allow plants to harden off for winter.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-garden-primary">Pest Management</h4>
                  <p>
                    Florida's warm, humid climate can encourage pests and diseases. Monitor for aphids, 
                    thrips, and black spot. Consider disease-resistant varieties and maintain good air 
                    circulation around plants by proper spacing and pruning.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
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

export default Roses;
