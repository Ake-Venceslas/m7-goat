"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Sparkles } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { motion, type Variants } from "framer-motion";

const AboutPage = () => {
  const { t } = useLanguage();

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const services = [
    { name: "Aromatherapy", icon: "✨" },
    { name: "Hydrotherapy", icon: "✨" },
    { name: "Reflexology", icon: "✨" },
    { name: "Stone Massage", icon: "✨" },
    { name: "Myofascial Release", icon: "✨" },
    { name: "Craniosacra Therapy", icon: "✨" },
    { name: "Thai Massage", icon: "✨" },
    { name: "Massage", icon: "✨" },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <motion.div
        className="bg-[#3d6b59] py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-serif text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("aboutUsTitle")}
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-2 text-white/80 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/" className="hover:text-white transition-colors">
              {t("home")}
            </Link>
            <span>»</span>
            <span>{t("aboutUsTitle")}</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Founder's Vision Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
            >
              <motion.div
                className="bg-gray-100 rounded-lg aspect-[4/5] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/Borel.jpeg"
                  alt="Founder"
                  width={500}
                  height={625}
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-serif text-gray-900 mb-6"
              >
                {t("founderVisionTitle")}
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed mb-4">
                {t("founderDesc1")}
              </motion.p>

              <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed mb-8">
                {t("founderDesc2")}
              </motion.p>

              {/* Founder Info */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <User size={24} className="text-gray-400" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-900">Borel Nechi</h4>
                  <p className="text-sm text-gray-500">{t("ceoAndFounder")}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Questions Banner */}
      <motion.div
        className="bg-[#3d3d3d] py-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-center md:text-left">
            <span className="font-serif italic">{t("questions")}</span>
            <span className="text-white/80 ml-2">
              {t("expertsHelp")}
            </span>
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#"
              className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-gray-900 transition-colors"
            >
              {t("getInTouch")}
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Illuminate Beauty Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-6"
              >
                {t("illuminateBeauty")}
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed mb-8">
                {t("illuminateDesc")}
              </motion.p>

              {/* Services Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-8"
                variants={staggerContainer}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2"
                    variants={fadeInUp}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <Sparkles size={16} className="text-[#3d6b59]" />
                    </motion.div>
                    <span className="text-sm text-gray-700">{service.name}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Read More Button */}
              <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/products"
                  className="inline-block border border-gray-900 text-gray-900 px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors"
                >
                  {t("readMore")}
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Images Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                className="bg-[#f5e6e0] rounded-lg aspect-square flex items-center justify-center overflow-hidden"
                variants={scaleIn}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <video
                  src="/Prodsuit 4.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="bg-[#e8d8c8] rounded-lg aspect-square flex items-center justify-center overflow-hidden"
                variants={scaleIn}
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <video
                  src="/Produit 5.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="bg-[#f5e6e0] rounded-lg aspect-square flex items-center justify-center col-span-2 overflow-hidden"
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <video
                  src="/Produit 5.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
