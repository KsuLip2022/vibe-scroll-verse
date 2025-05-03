
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Flower, TreePine, Heart } from 'lucide-react';

const GardenHeader = () => {
  const location = useLocation();

  return (
    <header className="bg-garden-primary text-white shadow-md">
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Gardens of Florida</h1>
          
          <nav className="flex gap-2">
            <Link to="/">
              <Button 
                variant={location.pathname === '/' ? "secondary" : "ghost"} 
                className="text-white hover:bg-garden-secondary/70"
              >
                <Flower className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link to="/plants">
              <Button 
                variant={location.pathname === '/plants' ? "secondary" : "ghost"} 
                className="text-white hover:bg-garden-secondary/70"
              >
                <Flower className="mr-2 h-4 w-4" />
                Plants
              </Button>
            </Link>
            <Link to="/trees">
              <Button 
                variant={location.pathname === '/trees' ? "secondary" : "ghost"} 
                className="text-white hover:bg-garden-secondary/70"
              >
                <TreePine className="mr-2 h-4 w-4" />
                Trees
              </Button>
            </Link>
            <Link to="/roses">
              <Button 
                variant={location.pathname === '/roses' ? "secondary" : "ghost"} 
                className="text-white hover:bg-garden-secondary/70"
              >
                <Heart className="mr-2 h-4 w-4" />
                Roses
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default GardenHeader;
