"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { motion, type Variants } from "framer-motion";

interface Product {
  id: number;
  nameKey: string;
  descKey: string;
  salePrice: number;
  image?: string
}

const products: Product[] = [
  {
    id: 1,
    nameKey: "prodCreme",
    descKey: "descCreme",
    salePrice: 6000,
    image: "/Creme.jpeg",
  },
  {
    id: 2,
    nameKey: "prodDermaroleur",
    descKey: "descDermaroleur",
    salePrice: 10000,
    image: "/dermaroleur.jpeg",
  },
  {
    id: 3,
    nameKey: "prodMiniElixir",
    descKey: "descElixir",
    salePrice: 5000,
    image: "/elixir 5k.jpeg",
  },
];

const ProductComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useLanguage();

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < products.length - 3 ? prev + 1 : prev));
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
            {t("ourBestSellers")}
          </h2>
          <motion.div whileHover={{ x: 5 }}>
            <Link
              href="/products"
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t("seeAll")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Product Image */}
              <motion.div
                className="relative bg-[#f5e6e0] rounded-2xl aspect-square mb-4 overflow-hidden flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={t(product.nameKey)}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <p className="text-sm">{t("productImage")}</p>
                      <p className="text-xs">{t(product.nameKey)}</p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Product Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t(product.nameKey)}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {t(product.descKey)}
                  </p>
                  <span className="font-semibold text-gray-900">
                    {product.salePrice} FCFA
                  </span>
                </div>

                {/* Add to Cart Button */}
                <motion.button 
                  onClick={() => {
                    const phoneNumber = "237654888860";
                    const message = language === "en" 
                      ? `Hello M7 GOAT! 🌟\n\nI'm interested in:\n📦 *${t(product.nameKey)}*\n💰 Price: ${product.salePrice} FCFA\n\nCan you give me more information?\n\nThank you!`
                      : `Bonjour M7 GOAT! 🌟\n\nJe suis intéressé(e) par:\n📦 *${t(product.nameKey)}*\n💰 Prix: ${product.salePrice} FCFA\n\nPouvez-vous me donner plus d'informations?\n\nMerci!`;
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors mt-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("commander")}
                  <ShoppingBag size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductComponents;
