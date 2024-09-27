import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const products = [
  { name: 'Product 1', price: 50, image: 'https://images.unsplash.com/photo-1642769512179-0a0a1edce4af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFkaWRhcyUyMHNob2VzfGVufDB8fDB8fHww' },
  { name: 'Product 2', price: 60, image: 'https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWRpZGFzJTIwc2hvZXMlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Product 3', price: 55, image: 'https://images.unsplash.com/photo-1523314399-837f3e0c291b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWRpZGFzJTIwc2hvZXMlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Product 4', price: 70, image: 'https://images.unsplash.com/photo-1542368826-86109e414d47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFkaWRhcyUyMHNob2VzJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' },
  { name: 'Product 5', price: 65, image: 'https://images.unsplash.com/photo-1566275542449-55f97f787d15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFkaWRhcyUyMHNob2VzJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' },
  { name: 'Product 6', price: 80, image: 'https://images.unsplash.com/photo-1575154610883-841b5f8a2775?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFkaWRhcyUyMHNob2VzJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' },
  { name: 'Product 7', price: 75, image: 'https://images.unsplash.com/photo-1718802319434-4142f3539a35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFkaWRhcyUyMHNob2VzfGVufDB8fDB8fHww' },
  { name: 'Product 8', price: 90, image: 'https://images.unsplash.com/photo-1571153168245-fc42e56026df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGFkaWRhcyUyMHNob2VzJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' },
];

function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
