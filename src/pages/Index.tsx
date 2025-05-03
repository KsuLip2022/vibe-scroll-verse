import React from 'react';
import Header from '@/components/Header';
import Stories from '@/components/Stories';
import Feed from '@/components/Feed';
import { User, MessageSquare, Users, Bell, Settings } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-social-background">
      <Header />
      <div className="container max-w-6xl mx-auto px-4 pt-4 flex gap-4">
        {/* Left Sidebar */}
        <div className="hidden md:block w-56 shrink-0">
          <div className="bg-white rounded shadow p-4 mb-4">
            <div className="flex items-center space-x-3 py-2 hover:bg-social-light rounded px-2 cursor-pointer">
              <User className="h-5 w-5 text-social-primary" />
              <span className="text-sm">Моя страница</span>
            </div>
            <div className="flex items-center space-x-3 py-2 hover:bg-social-light rounded px-2 cursor-pointer">
              <MessageSquare className="h-5 w-5 text-social-primary" />
              <span className="text-sm">Сообщения</span>
            </div>
            <div className="flex items-center space-x-3 py-2 hover:bg-social-light rounded px-2 cursor-pointer">
              <Users className="h-5 w-5 text-social-primary" />
              <span className="text-sm">Друзья</span>
            </div>
            <div className="flex items-center space-x-3 py-2 hover:bg-social-light rounded px-2 cursor-pointer">
              <Bell className="h-5 w-5 text-social-primary" />
              <span className="text-sm">Уведомления</span>
            </div>
            <div className="border-t border-social-border my-2"></div>
            <div className="flex items-center space-x-3 py-2 hover:bg-social-light rounded px-2 cursor-pointer">
              <Settings className="h-5 w-5 text-social-primary" />
              <span className="text-sm">Настройки</span>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 max-w-full md:max-w-[550px]">
          <Stories />
          <Feed />
        </div>
        
        {/* Right Sidebar */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="bg-white rounded shadow p-4 mb-4">
            <h3 className="font-semibold text-sm mb-3">Рекомендации</h3>
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-social-light mr-3"></div>
              <div>
                <div className="text-sm font-medium">Иван Петров</div>
                <div className="text-xs text-gray-500">3 общих друга</div>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-social-light mr-3"></div>
              <div>
                <div className="text-sm font-medium">Анна Смирнова</div>
                <div className="text-xs text-gray-500">1 общий друг</div>
              </div>
            </div>
            <div className="border-t border-social-border my-2"></div>
            <h3 className="font-semibold text-sm mb-3">Сообщества</h3>
            <div className="text-xs text-social-primary cursor-pointer">Показать все</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
