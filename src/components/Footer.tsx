import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Contacto</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a href="mailto:info@softwaresolutions.com" className="flex items-center mb-2 md:mb-0">
            <Mail className="mr-2" size={20} />
            info@softwaresolutions.com
          </a>
          <a
            href="https://wa.me/51962186600"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <MessageCircle className="mr-2" size={20} />
            WhatsApp: +51 962 186 600
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;