"use client";

import { useState } from "react";
import { Star, ChevronRight, User } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  review: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Emily Ronald",
    review:
      "I've struggled with dry, flaky skin for years, but this product has changed everything. After just one week, my skin feels plump and dewy—and the glow is real! I love that it keeps me moisturized all day.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rose Black",
    review:
      "I was skeptical, but this product truly cleared my stubborn hormonal acne in under a month. It doesn't dry me out like other treatments, and my dark marks are fading fast.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anjeli Lawyer",
    review:
      "Fine lines? Dullness? Gone. This serum makes my skin look firmer and brighter than it has in years. I've gotten so many compliments and my daughter even stole my bottle!",
    rating: 4,
  },
];

const ReviewComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }
      />
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-medium text-gray-900 text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("whatCustomersSay")}
        </motion.h2>

        {/* Reviews Grid */}
        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="relative bg-white rounded-2xl p-6 border-2 border-[#e8b4a8] shadow-sm"
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  borderColor: "#d4a094"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Avatar */}
                <motion.div
                  className="flex justify-center mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <User size={32} className="text-gray-300" />
                  </div>
                </motion.div>

                {/* Name */}
                <h3 className="text-center text-[#d4a094] font-medium mb-4">
                  {review.name}
                </h3>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed text-center mb-4">
                  {review.review}
                </p>

                {/* Stars */}
                <motion.div
                  className="flex justify-center gap-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {renderStars(review.rating)}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Next Arrow */}
          <motion.button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#d4a094] rounded-full flex items-center justify-center text-white hover:bg-[#c49084] transition-colors shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#d4a094]" : "bg-gray-300"
              }`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewComponents;
