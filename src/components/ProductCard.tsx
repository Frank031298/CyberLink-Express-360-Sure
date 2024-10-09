import React from 'react';
import { Product } from '../types';
import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappLink = `https://wa.me/51962186600?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(product.name)}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded-full inline-flex items-center hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="mr-2" size={20} />
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;