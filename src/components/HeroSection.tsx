import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "@/assets/match/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="MatchFashion luxury fashion collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative h-full container-luxury flex items-center">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4 font-sans"
          >
            New Season 2025
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6"
          >
            Find Your
            <br />
            Perfect Style
            <br />
            <span className="gold-text">Match</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/80 mb-10 max-w-md font-light leading-relaxed"
          >
            Luxury fashion curated for modern elegance. Discover collections
            that define your unique identity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/shop"
              className="bg-white text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/shop"
              className="border border-white/40 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors duration-300"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
