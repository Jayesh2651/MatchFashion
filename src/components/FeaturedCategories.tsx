import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import catMen from "@/assets/match/cat-men.jpg";
import catWomen from "@/assets/match/cat-women.jpg";
import catAccessories from "@/assets/match/cat-accessories.jpg";
import catStreetwear from "@/assets/match/cat-streetwear.jpg";

const categories = [
  { name: "Men", image: catMen, slug: "men" },
  { name: "Women", image: catWomen, slug: "women" },
  { name: "Accessories", image: catAccessories, slug: "accessories" },
  { name: "Streetwear", image: catStreetwear, slug: "streetwear" },
];

const FeaturedCategories = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Curated for You
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Shop by Category
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/shop?category=${cat.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-white text-2xl lg:text-3xl font-display font-bold mb-3">
                    {cat.name}
                  </h3>
                  <span className="text-white/0 group-hover:text-white text-xs uppercase tracking-[0.2em] border border-white/0 group-hover:border-white/50 px-5 py-2 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Shop Now
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
