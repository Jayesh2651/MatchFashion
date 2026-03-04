import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import NewArrivals from "@/components/NewArrivals";
import TrendingBanner from "@/components/TrendingBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import NewsletterSection from "@/components/NewsletterSection";
import SiteFooter from "@/components/SiteFooter";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedCategories />
      <NewArrivals />
      <TrendingBanner />
      <WhyChooseUs />
      <Testimonials />
      <NewsletterSection />
      <SiteFooter />
    </div>
  );
};

export default Home;
