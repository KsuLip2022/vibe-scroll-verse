
import React from 'react';
import { Button } from './ui/button';
import { Bell, MessageSquare, User, Search, Users } from 'lucide-react';
import { Input } from './ui/input';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-social-primary text-white shadow-md py-2">
      <div className="container max-w-6xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold">
            ВКонтакте
          </div>
          <div className="relative hidden md:block w-64">
            <Input 
              type="text" 
              placeholder="Поиск" 
              className="bg-social-secondary/70 border-transparent text-white placeholder:text-white/70 h-9" 
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 items-center">
          <Button variant="ghost" size="icon" className="text-white hover:bg-social-secondary">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-social-secondary">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-social-secondary">
            <Users className="h-5 w-5" />
          </Button>
          <div className="h-8 w-[1px] bg-white/20 mx-1"></div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-social-secondary rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
