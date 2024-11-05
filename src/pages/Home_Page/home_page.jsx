// HomePage.js
import React, { useState } from 'react';
import productsData from '../../data/RecommendedProducts.json';

const HomePage = () => {
  const { recommended_products } = productsData;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
  };

  return (
    <div>
      {/* Featured Section */}
      <div className="grid grid-cols-10 gap-6 mb-8">
        <div className="col-span-3 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300"></div>
        <div className="col-span-7 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {recommended_products.map((product, index) => (
          <div
            key={product.id}
            className="group relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:scale-105 border border-white/10"
            onClick={() => handleProductClick(product)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="p-6">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-48 object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-lg text-white/80 mb-3">${product.price}</p>
              <p className="text-sm text-white/60">
                Uploaded on: {new Date(product.upload_date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Content */}
      <div className="mt-8 space-y-6">
        <div className="h-40 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl shadow-lg hover:shadow-gray-700/30 transition-all duration-300"></div>
        <div className="h-40 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl shadow-lg hover:shadow-gray-700/30 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default HomePage;