import React from 'react';
import { Monitor } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex items-center">
        <Monitor className="mr-2" size={32} />
        <h1 className="text-2xl font-bold">Software Solutions</h1>
      </div>
    </header>
  );
};

export default Header;