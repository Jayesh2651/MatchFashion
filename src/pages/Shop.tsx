import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "";
  const isNew = searchParams.get("new") === "true";
  const [sort, setSort] = useState("newest");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [minRating, setMinRating] = useState(0);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (isNew) {
      result = result.filter((p) => p.isNew);
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [activeCategory, isNew, sort, priceRange, minRating]);

  const setCategory = (cat: string) => {
    if (cat) {
      searchParams.set("category", cat);
    } else {
      searchParams.delete("category");
    }
    searchParams.delete("new");
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="container-luxury text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-4"
          >
            {activeCategory
              ? categories.find((c) => c.slug === activeCategory)?.name || "Shop"
              : isNew
              ? "New Arrivals"
              : "All Collections"}
          </motion.h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Discover our curated selection of luxury fashion pieces.
          </p>
        </div>
      </section>

      <div className="container-luxury py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setCategory("")}
              className={`text-xs uppercase tracking-wider px-4 py-2 border transition-colors ${
                !activeCategory && !isNew
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:border-foreground"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setCategory(cat.slug)}
                className={`text-xs uppercase tracking-wider px-4 py-2 border transition-colors ${
                  activeCategory === cat.slug
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden flex items-center gap-2 text-sm border border-border px-4 py-2"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm bg-transparent border border-border px-4 py-2 outline-none"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-28 space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Price Range
                </h4>
                <div className="space-y-2">
                  {[
                    [0, 200],
                    [200, 400],
                    [400, 600],
                    [600, 1000],
                  ].map(([min, max]) => (
                    <button
                      key={`${min}-${max}`}
                      onClick={() => setPriceRange([min, max])}
                      className={`block text-sm ${
                        priceRange[0] === min && priceRange[1] === max
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      } transition-colors`}
                    >
                      ${min} — ${max}
                    </button>
                  ))}
                  <button
                    onClick={() => setPriceRange([0, 1000])}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    All Prices
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Rating
                </h4>
                <div className="space-y-2">
                  {[4, 3, 0].map((r) => (
                    <button
                      key={r}
                      onClick={() => setMinRating(r)}
                      className={`block text-sm ${
                        minRating === r
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      } transition-colors`}
                    >
                      {r > 0 ? `${r}+ Stars` : "All Ratings"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground mb-4">
                  No products match your filters.
                </p>
                <button
                  onClick={() => {
                    setPriceRange([0, 1000]);
                    setMinRating(0);
                    setCategory("");
                  }}
                  className="text-sm underline hover:text-accent transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <SiteFooter />

      {/* Mobile Filter Sheet */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setFiltersOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="absolute right-0 top-0 bottom-0 w-72 bg-background p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display text-lg font-semibold">Filters</h3>
              <button onClick={() => setFiltersOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Price Range
                </h4>
                {[
                  [0, 200],
                  [200, 400],
                  [400, 600],
                  [600, 1000],
                  [0, 1000],
                ].map(([min, max]) => (
                  <button
                    key={`${min}-${max}`}
                    onClick={() => {
                      setPriceRange([min, max]);
                      setFiltersOpen(false);
                    }}
                    className="block text-sm text-muted-foreground hover:text-foreground py-1"
                  >
                    {min === 0 && max === 1000
                      ? "All Prices"
                      : `$${min} — $${max}`}
                  </button>
                ))}
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Rating
                </h4>
                {[4, 3, 0].map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setMinRating(r);
                      setFiltersOpen(false);
                    }}
                    className="block text-sm text-muted-foreground hover:text-foreground py-1"
                  >
                    {r > 0 ? `${r}+ Stars` : "All Ratings"}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Shop;
