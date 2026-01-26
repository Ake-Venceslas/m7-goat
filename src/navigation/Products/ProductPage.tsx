"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingBag, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  category: string;
  image?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "The Glow Revival Set",
    description: "Hydrate & Brighten for Dewy, Radiant Skin",
    originalPrice: 25,
    salePrice: 20.99,
    category: "Sets",
  },
  {
    id: 2,
    name: "Blemish Rescue System",
    description: "Clear Breakouts & Soothe Angry Skin",
    originalPrice: 25,
    salePrice: 21.99,
    category: "Treatment",
  },
  {
    id: 3,
    name: "Age-Defy Overnight Kit",
    description: "Hydrate & Brighten for Dewy, Radiant Skin",
    originalPrice: 25,
    salePrice: 20.99,
    category: "Sets",
  },
  {
    id: 4,
    name: "Vitamin C Brightening Serum",
    description: "Powerful antioxidant for radiant skin",
    originalPrice: 35,
    salePrice: 29.99,
    category: "Serums",
  },
  {
    id: 5,
    name: "Hyaluronic Acid Moisturizer",
    description: "Deep hydration for plump, smooth skin",
    originalPrice: 40,
    salePrice: 34.99,
    category: "Moisturizers",
  },
  {
    id: 6,
    name: "Retinol Night Cream",
    description: "Anti-aging treatment while you sleep",
    originalPrice: 45,
    salePrice: 38.99,
    category: "Treatment",
  },
  {
    id: 7,
    name: "Gentle Foaming Cleanser",
    description: "Remove impurities without stripping skin",
    originalPrice: 18,
    salePrice: 14.99,
    category: "Cleansers",
  },
  {
    id: 8,
    name: "Rose Petal Toner",
    description: "Balance and refresh your complexion",
    originalPrice: 22,
    salePrice: 18.99,
    category: "Toners",
  },
  {
    id: 9,
    name: "Sunscreen SPF 50+",
    description: "Broad spectrum protection, lightweight feel",
    originalPrice: 28,
    salePrice: 24.99,
    category: "Sun Care",
  },
  {
    id: 10,
    name: "Niacinamide Pore Refiner",
    description: "Minimize pores and control oil",
    originalPrice: 32,
    salePrice: 27.99,
    category: "Serums",
  },
  {
    id: 11,
    name: "Eye Repair Cream",
    description: "Reduce dark circles and fine lines",
    originalPrice: 38,
    salePrice: 32.99,
    category: "Eye Care",
  },
  {
    id: 12,
    name: "Exfoliating Scrub",
    description: "Gently buff away dead skin cells",
    originalPrice: 20,
    salePrice: 16.99,
    category: "Exfoliators",
  },
  {
    id: 13,
    name: "Hydrating Face Mask",
    description: "Intensive moisture boost in 10 minutes",
    originalPrice: 15,
    salePrice: 12.99,
    category: "Masks",
  },
  {
    id: 14,
    name: "Lip Care Balm",
    description: "Nourish and protect delicate lips",
    originalPrice: 12,
    salePrice: 9.99,
    category: "Lip Care",
  },
  {
    id: 15,
    name: "Body Glow Oil",
    description: "Luxurious shimmer for silky smooth skin",
    originalPrice: 35,
    salePrice: 29.99,
    category: "Body Care",
  },
  {
    id: 16,
    name: "Complete Skincare Bundle",
    description: "Everything you need for glowing skin",
    originalPrice: 120,
    salePrice: 89.99,
    category: "Sets",
  },
];

const categories = [
  "All",
  "Sets",
  "Serums",
  "Moisturizers",
  "Treatment",
  "Cleansers",
  "Toners",
  "Sun Care",
  "Eye Care",
  "Exfoliators",
  "Masks",
  "Lip Care",
  "Body Care",
];

const ProductPage = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="bg-[#3d6b59] py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            {t("allProducts")}
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              {t("home")}
            </Link>
            <span>»</span>
            <span>{t("allProducts")}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <SlidersHorizontal size={18} className="text-gray-500" />
              {categories.slice(0, 6).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-[#3d6b59] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
              <div className="relative group">
                <button className="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1">
                  More
                  <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 z-10 hidden group-hover:block min-w-[150px]">
                  {categories.slice(6).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sort & Results */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {filteredProducts.length} products
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3d6b59]"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                {/* Product Image */}
                <div className="relative bg-[#f5e6e0] rounded-2xl aspect-square mb-4 overflow-hidden">
                  {/* Wishlist Button */}
                  <button className="absolute top-4 right-4 z-10 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart size={22} />
                  </button>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-white/90 text-xs px-3 py-1 rounded-full text-gray-700">
                    {product.category}
                  </span>

                  {/* Placeholder for product image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform">
                    <div className="text-center">
                      <p className="text-sm">Product Image</p>
                      <p className="text-xs mt-1">{product.name}</p>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#3d6b59] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-sm">
                        ${product.originalPrice}
                      </span>
                      <span className="font-semibold text-gray-900">
                        ${product.salePrice}
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-[#3d6b59] transition-colors text-sm">
                      {t("add")}
                      <ShoppingBag size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-12">
            <button className="border border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
              {t("loadMore")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
