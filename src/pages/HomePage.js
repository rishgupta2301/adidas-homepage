import React from 'react';
import Carousel from '../components/Carousel';
import ProductGrid from '../components/ProductGrid';
import QuotesSection from '../components/QuotesSection';            
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel'; 
import PromotionalBannerCarousel from '../components/PromotionalBannerCarousel'; 

function HomePage() {
  return (
    <div>
      <Carousel />
      <QuotesSection />                       
      <FeaturedProductsCarousel />             
      <PromotionalBannerCarousel />             
      <ProductGrid />
    </div>
  );
}

export default HomePage;