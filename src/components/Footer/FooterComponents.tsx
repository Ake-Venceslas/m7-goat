"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { motion, type Variants } from "framer-motion";

const FooterComponents = () => {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.footer
      className="w-full bg-[#3d6b59] py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <motion.h3
              className="text-xl font-semibold text-white mb-4"
              whileHover={{ scale: 1.05 }}
            >
              M7 GOAT
            </motion.h3>
            <p className="text-sm text-white/80 mb-1">Tel: +237 654 888 860</p>
            <p className="text-sm text-white/80">Mon Sat 8am-7pm GMT</p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">{t("navigation")}</h4>
            <ul className="space-y-2">
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="/"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {t("home")}
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="/products"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {t("allProducts")}
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">{t("company")}</h4>
            <ul className="space-y-2">
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="/about"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {t("aboutUs")}
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="/reviews"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {t("reviews")}
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="/"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {t("contact")}
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">{t("resources")}</h4>
            <ul className="space-y-2">
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="/"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {t("privacyPolicy")}
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="/"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {t("termsConditions")}
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4">{t("socialMedia")}</h4>
            <div className="flex flex-col gap-3">
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href=""
                  className="text-white/70 hover:text-white transition-colors inline-block"
                >
                  <Instagram size={24} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href=""
                  className="text-white/70 hover:text-white transition-colors inline-block"
                >
                  <Facebook size={24} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href=""
                  className="text-white/70 hover:text-white transition-colors inline-block"
                >
                  <Youtube size={24} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default FooterComponents;
