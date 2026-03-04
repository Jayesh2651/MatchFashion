import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";

const emailSchema = z.string().trim().email("Please enter a valid email");

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    setError("");
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="container-luxury max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-3">
            Stay Connected
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Join the <span className="gold-text">Inner Circle</span>
          </h2>
          <p className="text-background/60 mb-10 font-light">
            Be the first to access exclusive drops, styling tips, and members-only offers.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 bg-background/10 border border-background/20 text-background placeholder:text-background/40 text-sm outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
            >
              Subscribe
            </button>
          </form>

          {error && (
            <p className="text-destructive text-sm mt-3">{error}</p>
          )}
          {success && (
            <p className="text-accent text-sm mt-3">
              Welcome to the inner circle! ✨
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
