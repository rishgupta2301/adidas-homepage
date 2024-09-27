import React, { useRef } from 'react';
import './Carousel.css';

const images = [
  { src: 'https://images.unsplash.com/photo-1711719745936-ff93f602246e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D', alt: 'Adidas Shoe 1' },
  { src: 'https://images.unsplash.com/photo-1558191053-c03db2757e3d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFkaWRhcyUyMHNob2VzfGVufDB8fDB8fHww', alt: 'Adidas Shoe 2' },
  { src: 'https://images.unsplash.com/photo-1574020462714-5451391cc336?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNob2VzfGVufDB8fDB8fHww', alt: 'Adidas Shoe 3' },
  { src: 'https://images.unsplash.com/photo-1674487887797-3b602633255b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFkaWRhcyUyMHNob2VzfGVufDB8fDB8fHww', alt: 'Adidas Shoe 4' },
];

const Carousel = () => {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    trackRef.current.scrollBy({
      top: 0,
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    trackRef.current.scrollBy({
      top: 0,
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="carousel">
      <h2 className="carousel-title">Featured Products</h2> 
      <button className="carousel-button left" onClick={scrollLeft}>❮</button>
      <div className="carousel-track" ref={trackRef}>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className="carousel-image" />
        ))}
      </div>
      <button className="carousel-button right" onClick={scrollRight}>❯</button>
    </div>
  );
};

export default Carousel;
