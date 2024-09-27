import React from 'react';
import './FeaturedProductsCarousel.css';
import ProductCard from './ProductCard';

const products = [
    { name: 'Product 1', price: 50, image: 'https://picsum.photos/200/300?random=1' },
    { name: 'Product 2', price: 60, image: 'https://picsum.photos/200/300?random=2' },
    { name: 'Product 3', price: 55, image: 'https://picsum.photos/200/300?random=3' },
    { name: 'Product 4', price: 70, image: 'https://picsum.photos/200/300?random=4' },
    { name: 'Product 5', price: 80, image: 'https://picsum.photos/200/300?random=5' },
    { name: 'Product 6', price: 90, image: 'https://picsum.photos/200/300?random=6' },
];

function FeaturedProductsCarousel() {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="carousel">
        <div className="carousel-track">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProductsCarousel;
