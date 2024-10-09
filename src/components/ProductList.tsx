import React from 'react';
import { Category } from '../types';
import ProductCard from './ProductCard';

interface ProductListProps {
  category: Category;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;