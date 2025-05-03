
import React from 'react';
import GardenHeader from '@/components/GardenHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flower, TreePine, Rose } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <GardenHeader />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Gardens of Florida</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
            Explore the beauty of Central Florida's gardens, from native pines to exotic roses
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link to="/plants">
              <Button size="lg" className="bg-garden-secondary text-white hover:bg-garden-secondary/90">
                <Flower className="mr-2 h-5 w-5" />
                Explore Plants
              </Button>
            </Link>
            <Link to="/trees">
              <Button size="lg" className="bg-garden-primary text-white hover:bg-garden-primary/90">
                <TreePine className="mr-2 h-5 w-5" />
                Explore Trees
              </Button>
            </Link>
            <Link to="/roses">
              <Button size="lg" className="bg-garden-rose text-white hover:bg-garden-rose/90">
                <Rose className="mr-2 h-5 w-5" />
                Explore Roses
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Explore Our Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                alt="Florida landscape" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Florida Native Plants</h3>
              <p className="text-gray-600 mb-4">
                Explore the diverse native plants that thrive in Florida's unique climate.
              </p>
              <Link to="/plants">
                <Button className="bg-garden-primary hover:bg-garden-primary/90">
                  <Flower className="mr-2 h-4 w-4" />
                  View Plants
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                alt="Florida trees" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Majestic Trees</h3>
              <p className="text-gray-600 mb-4">
                Discover lemon trees, royal delonyx, and the beautiful orchid tree.
              </p>
              <Link to="/trees">
                <Button className="bg-garden-primary hover:bg-garden-primary/90">
                  <TreePine className="mr-2 h-4 w-4" />
                  View Trees
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
                alt="Roses" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Beautiful Roses</h3>
              <p className="text-gray-600 mb-4">
                Explore stunning varieties including Red Eden, Fragrance Cloud, and Princess de Monaco.
              </p>
              <Link to="/roses">
                <Button className="bg-garden-rose hover:bg-garden-rose/90">
                  <Rose className="mr-2 h-4 w-4" />
                  View Roses
                </Button>
              </Link>
            </CardContent>
          </Card>
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

export default Home;
