import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useCart } from "@/context/CartContext";

const checkoutSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  address: z.string().trim().min(5, "Address is required").max(500),
  city: z.string().trim().min(1, "City is required").max(100),
  zip: z.string().trim().min(3, "Zip code is required").max(20),
});

type FormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const shipping = totalPrice > 200 ? 0 : 15;
  const total = totalPrice + shipping;

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = checkoutSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    clearCart();
    navigate("/order-success");
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  const inputClass =
    "w-full px-4 py-3 bg-transparent border border-border text-sm outline-none focus:border-accent transition-colors";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container-luxury py-12 lg:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-5xl font-bold mb-12"
        >
          Checkout
        </motion.h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Billing */}
              <div>
                <h2 className="font-display text-xl font-semibold mb-6">
                  Billing Details
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {(
                    [
                      ["name", "Full Name"],
                      ["email", "Email Address"],
                      ["phone", "Phone Number"],
                      ["address", "Street Address"],
                      ["city", "City"],
                      ["zip", "Zip Code"],
                    ] as const
                  ).map(([field, label]) => (
                    <div
                      key={field}
                      className={
                        field === "address" ? "sm:col-span-2" : ""
                      }
                    >
                      <label className="block text-xs font-medium uppercase tracking-wider mb-2">
                        {label}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        value={form[field]}
                        onChange={(e) => handleChange(field, e.target.value)}
                        className={inputClass}
                      />
                      {errors[field] && (
                        <p className="text-destructive text-xs mt-1">
                          {errors[field]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment */}
              <div>
                <h2 className="font-display text-xl font-semibold mb-6">
                  Payment Method
                </h2>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { value: "card", label: "Credit Card" },
                    { value: "upi", label: "UPI" },
                    { value: "cod", label: "Cash on Delivery" },
                  ].map((method) => (
                    <button
                      key={method.value}
                      type="button"
                      onClick={() => setPaymentMethod(method.value)}
                      className={`p-4 border text-sm font-medium text-center transition-colors ${
                        paymentMethod === method.value
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-secondary/50 p-8 sticky top-28">
                <h2 className="font-display text-lg font-semibold mb-6">
                  Order Summary
                </h2>
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-muted-foreground truncate mr-4">
                        {item.name} × {item.quantity}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-semibold text-base">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-foreground text-background py-4 text-sm font-semibold uppercase tracking-wider hover:bg-accent transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Checkout;
