"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, ClipboardCheck, CircleDot, Leaf } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { motion } from "framer-motion";

const HeroComponents = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-medium text-gray-900 leading-tight mb-16 max-w-2xl"
        >
          {t("whyTitle")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Product Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Decorative Circles */}
            <motion.div
              custom={0}
              variants={circleVariants}
              animate={pulseAnimation}
              className="absolute -top-8 -left-8 w-24 h-24 bg-[#f5e6e0] rounded-full opacity-70"
            />
            <motion.div
              custom={1}
              variants={circleVariants}
              animate={pulseAnimation}
              className="absolute top-20 right-10 w-16 h-16 bg-[#f5e6e0] rounded-full opacity-50"
            />
            <motion.div
              custom={2}
              variants={circleVariants}
              animate={pulseAnimation}
              className="absolute -bottom-4 left-20 w-12 h-12 bg-[#f5e6e0] rounded-full opacity-60"
            />

            {/* Wooden Platform with Products */}
            <motion.div
              className="relative z-10 flex justify-center"
              variants={imageVariants}
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
                <Image
                  src="/exo 2.jpeg"
                  alt="Product Image"
                  width={350}
                  height={300}
                  className="object-contain"
                  priority
                />
              </motion.div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Feature 1 */}
            <motion.div variants={featureVariants} className="flex gap-4">
              <div className="flex-shrink-0">
                <motion.div
                  className="p-3 border border-gray-200 rounded-lg"
                  whileHover={{ scale: 1.1, borderColor: "#3d6b59" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sparkles size={24} className="text-gray-700" />
                </motion.div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("cleanFormulas")}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("cleanFormulasDesc")}
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={featureVariants} className="flex gap-4">
              <div className="flex-shrink-0">
                <motion.div
                  className="p-3 border border-gray-200 rounded-lg"
                  whileHover={{ scale: 1.1, borderColor: "#3d6b59" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ClipboardCheck size={24} className="text-gray-700" />
                </motion.div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("dermatologistTested")}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("dermatologistTestedDesc")}
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={featureVariants} className="flex gap-4">
              <div className="flex-shrink-0">
                <motion.div
                  className="p-3 border border-gray-200 rounded-lg"
                  whileHover={{ scale: 1.1, borderColor: "#3d6b59" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CircleDot size={24} className="text-gray-700" />
                </motion.div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("visibleResults")}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "My acne scars faded in weeks!" – Jane Evans
                  <br />
                  "The only moisturizer that doesn't break me out." – Beth
                  Thompson
                </p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={featureVariants} className="flex gap-4">
              <div className="flex-shrink-0">
                <motion.div
                  className="p-3 border border-gray-200 rounded-lg"
                  whileHover={{ scale: 1.1, borderColor: "#3d6b59" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Leaf size={24} className="text-gray-700" />
                </motion.div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t("goodForPlanet")}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="inline-flex items-center gap-1">
                    ♻️ {t("recyclablePackaging")}
                  </span>
                  <br />
                  <span className="inline-flex items-center gap-1">
                    🌱 {t("veganCrueltyFree")}
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Order Now Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-colors"
            >
              {t("orderNow")}
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroComponents;
