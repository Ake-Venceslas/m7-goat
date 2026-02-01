"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { motion, type Variants } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Skincare Tips for Glowing Skin in 2026",
    excerpt:
      "Discover the top skincare secrets that dermatologists swear by. From double cleansing to the perfect layering technique, we've got you covered.",
    category: "Skincare Tips",
    author: "Emma Sterling",
    date: "Jan 20, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "The Science Behind Hyaluronic Acid",
    excerpt:
      "Learn why hyaluronic acid is the holy grail ingredient for hydration and how to incorporate it into your daily routine.",
    category: "Ingredients",
    author: "Dr. Sarah Chen",
    date: "Jan 18, 2026",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Morning vs. Night Skincare Routine: What's the Difference?",
    excerpt:
      "Understanding when to use certain products can make all the difference in your skincare journey.",
    category: "Routines",
    author: "Rose Black",
    date: "Jan 15, 2026",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "How to Build a Sustainable Beauty Cabinet",
    excerpt:
      "Eco-friendly beauty doesn't mean compromising on quality. Here's how to make conscious choices.",
    category: "Sustainability",
    author: "Emma Sterling",
    date: "Jan 12, 2026",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Understanding Your Skin Type: A Complete Guide",
    excerpt:
      "Is your skin oily, dry, combination, or sensitive? Learn how to identify your skin type and choose the right products.",
    category: "Skincare Tips",
    author: "Dr. Sarah Chen",
    date: "Jan 10, 2026",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "The Truth About Anti-Aging: What Really Works",
    excerpt:
      "Separating fact from fiction in the world of anti-aging skincare. Discover ingredients that are backed by science.",
    category: "Anti-Aging",
    author: "Dr. Sarah Chen",
    date: "Jan 8, 2026",
    readTime: "6 min read",
  },
  {
    id: 7,
    title: "DIY Face Masks Using Kitchen Ingredients",
    excerpt:
      "Pamper your skin with these easy homemade face masks using ingredients you already have at home.",
    category: "DIY Beauty",
    author: "Rose Black",
    date: "Jan 5, 2026",
    readTime: "4 min read",
  },
  {
    id: 8,
    title: "Why SPF Should Be Your #1 Priority",
    excerpt:
      "Sun protection is the most important step in any skincare routine. Here's why you should never skip it.",
    category: "Sun Care",
    author: "Emma Sterling",
    date: "Jan 3, 2026",
    readTime: "5 min read",
  },
];

const categories = [
  "All",
  "Skincare Tips",
  "Ingredients",
  "Routines",
  "Sustainability",
  "Anti-Aging",
  "DIY Beauty",
  "Sun Care",
];

const BlogPage = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

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
            {t("beautyBlog")}
          </motion.h1>
          <motion.p
            className="text-white/80 max-w-xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("blogDescription")}
          </motion.p>
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
            <span>{t("blogs")}</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Posts */}
      <section className="bg-[#f5e6e0] py-12">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            className="text-2xl font-serif text-gray-900 mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("featuredArticles")}
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image Placeholder */}
                <div className="bg-[#e8d8c8] h-48 flex items-center justify-center">
                  <p className="text-gray-400 text-sm">{t("featuredImage")}</p>
                </div>
                <div className="p-6">
                  <motion.span
                    className="inline-block bg-[#3d6b59] text-white text-xs px-3 py-1 rounded-full mb-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    {post.category}
                  </motion.span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-[#3d6b59] transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                    </div>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-[#3d6b59] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        {t("readMoreLink")}
                        <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Search & Filter Bar */}
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder={t("searchArticles")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3d6b59] focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-[#3d6b59] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Posts Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image Placeholder */}
                <div className="bg-[#f5e6e0] h-40 flex items-center justify-center">
                  <p className="text-gray-400 text-sm">{t("blogImage")}</p>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <motion.span
                      className="bg-[#f5e6e0] text-[#3d6b59] text-xs px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      {post.category}
                    </motion.span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-[#3d6b59] transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <User size={14} className="text-gray-400" />
                      </motion.div>
                      <div>
                        <p className="text-xs font-medium text-gray-900">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={`/blog/${post.id}`}
                        className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-[#3d6b59] transition-colors"
                      >
                        <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                className="border border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("loadMoreArticles")}
              </motion.button>
            </motion.div>
          )}

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500">
                {t("noArticlesFound")}
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
