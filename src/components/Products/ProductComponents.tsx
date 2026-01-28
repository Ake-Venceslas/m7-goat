"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

interface Product {
  id: number;
  name: string;
  description: string;
  salePrice: number;
  image?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "The Glow Revival Set",
    description: "Hydrate & Brighten for Dewy, Radiant Skin",
    salePrice: 20.99,
  },
  {
    id: 2,
    name: "Blemish Rescue System",
    description: "Clear Breakouts & Soothe Angry Skin",
    salePrice: 21.99,
  },
  {
    id: 3,
    name: "Age-Defy Overnight Kit",
    description: "Hydrate & Brighten for Dewy, Radiant Skin",
    salePrice: 20.99,
  },
];

const ProductComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < products.length - 3 ? prev + 1 : prev));
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
            {t("ourBestSellers")}
          </h2>
          <Link
            href="/products"
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            {t("seeAll")}
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Product Image */}
              <div className="relative bg-[#f5e6e0] rounded-2xl aspect-square mb-4 overflow-hidden">

                {/* Placeholder for product image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <p className="text-sm">Product Image</p>
                    <p className="text-xs">{product.name}</p>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {product.description}
                  </p>
                  <span className="font-semibold text-gray-900">
                    ${product.salePrice}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors mt-auto">
                  Commander
                  <ShoppingBag size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductComponents;
