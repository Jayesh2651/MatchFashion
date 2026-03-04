import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Olivia Carter",
    role: "Fashion Blogger",
    text: "MatchFashion has completely elevated my wardrobe. The quality is unmatched, and every piece feels like it was made just for me. I wouldn't shop anywhere else.",
    rating: 5,
    avatar: "OC",
  },
  {
    name: "James Mitchell",
    role: "Creative Director",
    text: "From the packaging to the fit, every detail screams luxury. The tailored blazer I purchased is hands down the best I've ever owned. Incredible craftsmanship.",
    rating: 5,
    avatar: "JM",
  },
  {
    name: "Sophia Laurent",
    role: "Model & Influencer",
    text: "I love how MatchFashion blends timeless elegance with modern trends. Their new arrivals always have something that catches my eye. Fast shipping too!",
    rating: 5,
    avatar: "SL",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container-luxury max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                "{t.text}"
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold">
                  {t.avatar}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 border border-border hover:border-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="p-2 border border-border hover:border-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
