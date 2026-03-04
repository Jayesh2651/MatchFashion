import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import trendingImg from "@/assets/match/trending.jpg";

const TrendingBanner = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <img
        src={trendingImg}
        alt="Trending collection"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl px-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">
            Trending Now
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            The Gold <span className="gold-text">Collection</span>
          </h2>
          <p className="text-white/70 mb-8 text-lg font-light">
            Limited edition pieces crafted with precision and luxury in mind.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-black px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            View Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingBanner;
