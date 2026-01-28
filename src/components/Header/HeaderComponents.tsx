"use client";

import Link from "next/link";
import Image from "next/image";
import { Truck, ArrowUpRight, Star } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

const HeaderComponents = () => {
  const { t } = useLanguage();
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#e8d4ce] rounded-full opacity-70" />
        <div className="absolute -top-20 right-60 w-40 h-40 bg-[#e8d4ce] rounded-full opacity-50" />

        <div className="max-w-7xl mx-auto px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              {/* Free Delivery Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-white rounded-lg">
                  <Truck size={18} className="text-gray-700" />
                </div>
                <span className="text-sm font-medium tracking-wide text-gray-700">
                  {t("freeDelivery")}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-gray-900 leading-tight mb-6">
                {t("heroTitle1")}
                <br />
                {t("heroTitle2")}
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
                {t("heroDescription")}
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-6">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
                >
                  {t("orderNow")}
                  <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 font-medium hover:text-gray-900 transition-colors"
                >
                  {t("findOutMore")}
                </Link>
              </div>
            </div>

            {/* Right Content - Product Image */}
            <div className="relative z-10 flex justify-center">
              <div className="relative">
                {/* Wooden Platform with Products - Placeholder */}
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-b from-[#d4a574] to-[#c49a6c] rounded-full flex items-end justify-center">
                  <div className="text-center text-white/80 pb-8">
                    <p className="text-sm">Product Image</p>
                    <p className="text-xs">Add your image in /public</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-[#f5e6e0] border-t border-[#e0d0c8]">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Trust Text */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              {t("trustedBy")}
            </h2>

            {/* Stats */}
            <div className="flex items-center gap-12">
              {/* Rating */}
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">4.6</div>
                <div className="flex items-center justify-center gap-0.5 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">3,500 {t("ratings")}</div>
              </div>

              {/* Products Sold */}
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">1M</div>
                <div className="text-sm text-gray-600">
                  {t("worldwideProducts")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderComponents;
