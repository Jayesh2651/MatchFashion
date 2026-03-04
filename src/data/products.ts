import product1 from "@/assets/match/product-1.jpg";
import product2 from "@/assets/match/product-2.jpg";
import product3 from "@/assets/match/product-3.jpg";
import product4 from "@/assets/match/product-4.jpg";
import product5 from "@/assets/match/product-5.jpg";
import product6 from "@/assets/match/product-6.jpg";
import product7 from "@/assets/match/product-7.jpg";
import product8 from "@/assets/match/product-8.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Italian Leather Biker Jacket",
    price: 489,
    originalPrice: 599,
    image: product1,
    category: "men",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    description:
      "Crafted from premium Italian leather with satin lining. Features asymmetric zip closure and silver-tone hardware.",
  },
  {
    id: 2,
    name: "Silk Wrap Midi Dress",
    price: 329,
    image: product2,
    category: "women",
    rating: 4.9,
    reviews: 89,
    isNew: true,
    description:
      "Flowing silk wrap dress with a flattering V-neckline and cinched waist. Perfect for evening occasions.",
  },
  {
    id: 3,
    name: "Tailored Navy Blazer",
    price: 425,
    image: product3,
    category: "men",
    rating: 4.7,
    reviews: 156,
    isNew: false,
    description:
      "Impeccably tailored blazer in navy wool blend. Notch lapel, two-button closure, and chest pocket square.",
  },
  {
    id: 4,
    name: "Gold Accent Sneakers",
    price: 275,
    originalPrice: 350,
    image: product4,
    category: "streetwear",
    rating: 4.6,
    reviews: 203,
    isNew: true,
    description:
      "Premium leather sneakers with gold metallic accents. Cushioned sole for all-day comfort.",
  },
  {
    id: 5,
    name: "Cashmere Turtleneck",
    price: 299,
    image: product5,
    category: "women",
    rating: 4.9,
    reviews: 67,
    isNew: true,
    description:
      "100% pure cashmere turtleneck in cream. Ribbed cuffs and hem. Ultra-soft and lightweight.",
  },
  {
    id: 6,
    name: "Signature Leather Tote",
    price: 595,
    image: product6,
    category: "accessories",
    rating: 4.8,
    reviews: 312,
    isNew: false,
    description:
      "Structured leather tote with gold-tone hardware. Interior zip pocket and magnetic snap closure.",
  },
  {
    id: 7,
    name: "Slim Fit Dress Trousers",
    price: 189,
    image: product7,
    category: "men",
    rating: 4.5,
    reviews: 98,
    isNew: false,
    description:
      "Sharp slim-fit trousers in premium stretch wool. Perfect crease and tapered leg.",
  },
  {
    id: 8,
    name: "Premium Oversized Hoodie",
    price: 159,
    originalPrice: 199,
    image: product8,
    category: "streetwear",
    rating: 4.7,
    reviews: 445,
    isNew: true,
    description:
      "Heavyweight cotton oversized hoodie in deep black. Kangaroo pocket and brushed fleece interior.",
  },
];

export const getProductById = (id: number) =>
  products.find((p) => p.id === id);

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);

export const categories = [
  { name: "Men", slug: "men" },
  { name: "Women", slug: "women" },
  { name: "Accessories", slug: "accessories" },
  { name: "Streetwear", slug: "streetwear" },
];
