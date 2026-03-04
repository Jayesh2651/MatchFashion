import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import NewsletterSection from "@/components/NewsletterSection";
import heroImg from "@/assets/match/hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src={heroImg}
          alt="About MatchFashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-white"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      <div className="container-luxury py-16 lg:py-24 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              The MatchFashion Philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Born from a passion for precision and an eye for contemporary elegance,
              MatchFashion was founded in 2020 with a singular vision: to make luxury
              fashion accessible without compromising on quality. We believe that fashion
              is a form of self-expression, and every individual deserves pieces that
              speak to their unique identity.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To redefine the boundaries of modern luxury fashion by curating collections
              that merge timeless craftsmanship with forward-thinking design. We envision
              a world where premium style isn't reserved for the few — it's a birthright
              for those who dare to express themselves boldly.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We partner with master artisans and sustainable suppliers across the globe
              to bring you meticulously crafted garments. Every stitch, every fabric
              choice, every silhouette is intentional. From Italian leather to Japanese
              denim, we source only the finest materials to create pieces that stand
              the test of time.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              Crafted with Purpose
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sustainability isn't an afterthought at MatchFashion — it's woven into our
              DNA. We prioritize ethical production, minimal waste packaging, and
              long-lasting designs over fast fashion cycles. When you invest in
              MatchFashion, you invest in pieces meant to last, not just a season,
              but a lifetime.
            </p>
          </div>
        </motion.div>
      </div>

      <NewsletterSection />
      <SiteFooter />
    </div>
  );
};

export default About;
