import React from 'react';
import Carousel from '../components/Carousel';
import ProductGrid from '../components/ProductGrid';
import QuotesSection from '../components/QuotesSection';            // New Import
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel'; // New Import
import PromotionalBannerCarousel from '../components/PromotionalBannerCarousel'; // New Import

function HomePage() {
  return (
    <div>
      <Carousel />
      <QuotesSection />                        {/* New Section */}
      <FeaturedProductsCarousel />             {/* New Section */}
      <PromotionalBannerCarousel />             {/* New Section */}
      <ProductGrid />
    </div>
  );
}

export default HomePage;