"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, ClipboardCheck, CircleDot, Leaf } from "lucide-react";

const HeroComponents = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 leading-tight mb-16 max-w-2xl">
          Why Our Skincare is Good for You – And Your Skin
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Product Image */}
          <div className="relative">
            {/* Decorative Circles */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#f5e6e0] rounded-full opacity-70" />
            <div className="absolute top-20 right-10 w-16 h-16 bg-[#f5e6e0] rounded-full opacity-50" />
            <div className="absolute -bottom-4 left-20 w-12 h-12 bg-[#f5e6e0] rounded-full opacity-60" />

            {/* Wooden Platform with Products - Placeholder */}
            <div className="relative z-10 flex justify-center">
              <div className="w-80 h-72 md:w-96 md:h-80 bg-gradient-to-b from-[#8b5a3c] to-[#6d4532] rounded-t-full rounded-b-3xl flex items-center justify-center">
                <div className="text-center text-white/80">
                  <p className="text-sm">Product Image</p>
                  <p className="text-xs">Add your image in /public</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 border border-gray-200 rounded-lg">
                  <Sparkles size={24} className="text-gray-700" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Clean, Science-Backed Formulas
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every product is crafted with clinically proven ingredients that
                  deliver real results.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 border border-gray-200 rounded-lg">
                  <ClipboardCheck size={24} className="text-gray-700" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Dermatologist-Tested & Skin-Loving
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you have sensitive, acne-prone, or mature skin, our
                  products are designed to soothe irritation, balance oil
                  production, and protect and repair.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 border border-gray-200 rounded-lg">
                  <CircleDot size={24} className="text-gray-700" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Visible Results You Can Trust
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "My acne scars faded in weeks!" – Jane Evans
                  <br />
                  "The only moisturizer that doesn't break me out." – Beth
                  Thompson
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 border border-gray-200 rounded-lg">
                  <Leaf size={24} className="text-gray-700" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Good for Your Skin, Good for the Planet
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="inline-flex items-center gap-1">
                    ♻️ Recyclable packaging
                  </span>
                  <br />
                  <span className="inline-flex items-center gap-1">
                    🌱 Vegan & cruelty-free – Certified by Leaping Bunny
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Now Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/order"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-colors"
          >
            Order Now
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroComponents;
