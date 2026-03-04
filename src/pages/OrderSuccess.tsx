import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container-luxury py-32 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="mb-6"
        >
          <CheckCircle size={72} className="mx-auto text-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-4xl md:text-5xl font-bold mb-4"
        >
          Order Confirmed!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground text-lg mb-10 max-w-md mx-auto"
        >
          Thank you for shopping with MatchFashion. Your order is being prepared
          with care and will be shipped shortly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/shop"
            className="bg-foreground text-background px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-accent transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="border border-border px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:border-foreground transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default OrderSuccess;
