"use client";

import Link from "next/link";
import Image from "next/image";
import { Truck, ArrowUpRight, Star } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { motion, type Variants } from "framer-motion";

const HeaderComponents = () => {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const circleVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.7,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        {/* Decorative Circles */}
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-10 right-20 w-64 h-64 bg-[#3d6b59] rounded-full opacity-70"
        />
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="absolute -top-20 right-60 w-40 h-40 bg-[#3d6b59] rounded-full opacity-50"
        />

        <div className="max-w-7xl mx-auto px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Free Delivery Badge */}
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
                <motion.div
                  className="p-2 bg-white rounded-lg shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Truck size={18} className="text-gray-700" />
                </motion.div>
                <span className="text-sm font-medium tracking-wide text-gray-700">
                  {t("freeDelivery")}
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-serif font-medium text-gray-900 leading-tight mb-6"
              >
                {t("heroTitle1")}
                <br />
                {t("heroTitle2")}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-gray-600 text-base leading-relaxed mb-8 max-w-md"
              >
                {t("heroDescription")}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex items-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    {t("orderNow")}
                    <ArrowUpRight size={18} />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href="/about"
                    className="text-gray-700 font-medium hover:text-gray-900 transition-colors"
                  >
                    {t("findOutMore")}
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            {/* Right Content - Product Image */}
            <motion.div
              className="relative z-10 flex justify-center"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="relative" animate={floatAnimation}>
                {/* Wooden Platform with Products */}
                <Image
                  src="/exo.jpeg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="object-contain max-h-full"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <motion.div
        className="bg-[#f5e6e0] border-t border-[#e0d0c8]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Trust Text */}
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-gray-900"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("trustedBy")}
            </motion.h2>

            {/* Stats */}
            <div className="flex items-center gap-12">
              {/* Rating */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-gray-900">4.6</div>
                <div className="flex items-center justify-center gap-0.5 my-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">3,500 {t("ratings")}</div>
              </motion.div>

              {/* Products Sold */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-gray-900">1M</div>
                <div className="text-sm text-gray-600">
                  {t("worldwideProducts")}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeaderComponents;
