import { motion } from "framer-motion";
import { Gem, Truck, RotateCcw, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Quality",
    description: "Every piece is crafted from the finest materials, selected for durability and luxury.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Express worldwide shipping with real-time tracking on all orders.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Hassle-free 30-day return policy. Your satisfaction is our priority.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Bank-grade encryption protects every transaction you make.",
  },
];

const WhyChooseUs = () => {
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
            Our Promise
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Why MatchFashion
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 border border-border hover:border-accent transition-colors duration-300 group"
            >
              <feature.icon
                size={32}
                className="mx-auto mb-5 text-muted-foreground group-hover:text-accent transition-colors"
              />
              <h3 className="font-display text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
