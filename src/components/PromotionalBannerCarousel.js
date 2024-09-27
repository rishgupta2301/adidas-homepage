import React from 'react';
import './PromotionalBannerCarousel.css';

const banners = [
  { src: 'https://images.unsplash.com/photo-1570464197285-9949814674a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFkaWRhcyUyMHNob2VzJTIwYmFubmVyfGVufDB8fDB8fHww', alt: 'Promo Banner 1' },
  { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRpZGFzJTIwc2hvZXMlMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D', alt: 'Promo Banner 2' },
];

function PromotionalBannerCarousel() {
  return (
    <section className="promotional-banner">
      <h2>Current Promotions</h2>
      <div className="carousel">
        {banners.map((banner, index) => (
          <img key={index} src={banner.src} alt={banner.alt} className="banner-image" />
        ))}
      </div>
    </section>
  );
}

export default PromotionalBannerCarousel;
