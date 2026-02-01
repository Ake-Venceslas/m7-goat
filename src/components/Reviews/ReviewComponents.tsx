"use client";

import { useState, useEffect } from "react";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  reviewKey: string;
  rating: number;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Kuete Junior",
    reviewKey: "review1",
    rating: 5,
    image: "/reviews/review1.jpg",
  },
  {
    id: 2,
    name: "Fomez Junior",
    reviewKey: "review2",
    rating: 5,
    image: "/reviews/review2.jpg",
  },
  {
    id: 3,
    name: "Rose Black",
    reviewKey: "review3",
    rating: 4,
    image: "/reviews/review3.jpg",
  },
  {
    id: 4,
    name: "Billy Kimber",
    reviewKey: "review4",
    rating: 4,
    image: "/reviews/review4.jpg",
  },
  {
    id: 5,
    name: "Winston Churchill",
    reviewKey: "review5",
    rating: 5,
    image: "/reviews/review5.jpg",
  },
  {
    id: 6,
    name: "Thomas Shelby",
    reviewKey: "review6",
    rating: 4,
    image: "/reviews/review6.jpg",
  },
  {
    id: 7,
    name: "Chioma",
    reviewKey: "review7",
    rating: 5,
    image: "/reviews/review7.jpg",
  },
  {
    id: 8,
    name: "Elliot",
    reviewKey: "review8",
    rating: 4,
    image: "/reviews/review8.jpg",
  },
  {
    id: 9,
    name: "Roxy",
    reviewKey: "review9",
    rating: 5,
    image: "/reviews/review9.jpg",
  },
];

const ReviewComponents = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { t } = useLanguage();
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // Auto-advance carousel every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 10000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentReviews = () => {
    const startIndex = currentPage * reviewsPerPage;
    return reviews.slice(startIndex, startIndex + reviewsPerPage);
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      scale: 0.9,
      transition: {
        duration: 0.3,
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

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Previous Arrow */}
          <motion.button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-[#d4a094] rounded-full flex items-center justify-center text-[#d4a094] hover:bg-[#d4a094] hover:text-white transition-colors shadow-lg z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* Reviews Grid */}
          <div className="overflow-hidden px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {getCurrentReviews().map((review, index) => (
                  <motion.div
                    key={review.id}
                    className="relative bg-white rounded-2xl p-6 border-2 border-[#e8b4a8] shadow-sm"
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      borderColor: "#d4a094",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Avatar with Image */}
                    <motion.div
                      className="flex justify-center mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-[#d4a094] shadow-md">
                        <Image
                          src={review.image}
                          alt={review.name}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            // Fallback to placeholder if image doesn't exist
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=d4a094&color=fff&size=80`;
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Name */}
                    <h3 className="text-center text-[#d4a094] font-semibold text-lg mb-3">
                      {review.name}
                    </h3>

                    {/* Stars */}
                    <motion.div
                      className="flex justify-center gap-1 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {renderStars(review.rating)}
                    </motion.div>

                    {/* Review Text */}
                    <p className="text-gray-600 text-sm leading-relaxed text-center line-clamp-4">
                      {t(review.reviewKey)}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Arrow */}
          <motion.button
            onClick={handleNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#d4a094] rounded-full flex items-center justify-center text-white hover:bg-[#c49084] transition-colors shadow-lg z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(totalPages)].map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? "bg-[#d4a094] w-8"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </motion.div>

        {/* Page Counter */}
        <motion.p
          className="text-center text-gray-400 text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {currentPage + 1} / {totalPages}
        </motion.p>
      </div>
    </section>
  );
};

export default ReviewComponents;
