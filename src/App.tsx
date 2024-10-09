import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { categories } from './data/categories';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <p className="text-lg text-center mb-8">
          Ofrecemos programas informáticos de alta calidad para todas tus necesidades.
        </p>
        {categories.map((category) => (
          <ProductList key={category.id} category={category} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;