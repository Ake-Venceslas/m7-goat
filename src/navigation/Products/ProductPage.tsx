"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ShoppingBag, SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { useLanguage, translations } from "@/src/context/LanguageContext";
import { motion, type Variants } from "framer-motion";

interface Product {
  id: number;
  nameKey: string;
  descKey: string;
  salePrice: number;
  categoryKey: string;
  image?: string;
}

const products: Product[] = [
  {
    id: 1,
    nameKey: "prodCreme",
    descKey: "descCreme",
    salePrice: 6000,
    categoryKey: "catCremes",
    image: "/Creme.jpeg",
  },
  {
    id: 2,
    nameKey: "prodDermaroleur",
    descKey: "descDermaroleur",
    salePrice: 10000,
    categoryKey: "catAccessoires",
    image: "/dermaroleur.jpeg",
  },
  {
    id: 3,
    nameKey: "prodMiniElixir",
    descKey: "descElixir",
    salePrice: 5000,
    categoryKey: "catHuileSerums",
    image: "/elixir 5k.jpeg",
  },
  {
    id: 4,
    nameKey: "prodMaxiElixir",
    descKey: "descElixir",
    salePrice: 8000,
    categoryKey: "catHuileSerums",
    image: "/elixir 8k.jpeg",
  },
  {
    id: 5,
    nameKey: "prodElixirCreme",
    descKey: "descPack",
    salePrice: 11000,
    categoryKey: "catPacksKits",
    image: "/elixir et creme.jpeg",
  },
  {
    id: 6,
    nameKey: "prodElixirDermaroleur",
    descKey: "descElixirDermaroleur",
    salePrice: 15000,
    categoryKey: "catPacksKits",
    image: "/elixir et dermaroleur.jpeg",
  },
  {
    id: 7,
    nameKey: "prodElixirEpices",
    descKey: "descPack",
    salePrice: 8500,
    categoryKey: "catPacksKits",
    image: "/elixir et epices.jpeg",
  },
  {
    id: 8,
    nameKey: "prodElixirShampoing",
    descKey: "descPack",
    salePrice: 12000,
    categoryKey: "catPacksKits",
    image: "/elixir et shampoing.jpeg",
  },
  {
    id: 9,
    nameKey: "prodElixirSpray",
    descKey: "descPack",
    salePrice: 10000,
    categoryKey: "catPacksKits",
    image: "/elixir et spray.jpeg",
  },
  {
    id: 10,
    nameKey: "prodElixirSprayShampoing",
    descKey: "descGamme",
    salePrice: 17000,
    categoryKey: "catPacksKits",
    image: "/elixir, spray, shampoing.jpeg",
  },
  {
    id: 11,
    nameKey: "prodElixirSprayShampoingCreme",
    descKey: "descGamme",
    salePrice: 23000,
    categoryKey: "catPacksKits",
    image: "/elixir,spray,shampoing,creme.jpeg",
  },
  {
    id: 12,
    nameKey: "prodEpices",
    descKey: "descEpices",
    salePrice: 3500,
    categoryKey: "catSoinsNaturels",
    image: "/Epices.jpeg",
  },
  {
    id: 13,
    nameKey: "prodShampoing",
    descKey: "descShampoing",
    salePrice: 7000,
    categoryKey: "catShampoings",
    image: "/Shampoing.jpeg",
  },
  {
    id: 14,
    nameKey: "prodSpray",
    descKey: "descSpray",
    salePrice: 5000,
    categoryKey: "catSprays",
    image: "/spray.jpeg",
  },
  {
    id: 15,
    nameKey: "prodMiniGamme",
    descKey: "descGamme",
    salePrice: 35000,
    categoryKey: "catGammesCompletes",
    image: "/gamme complete 1.jpeg",
  },
  {
    id: 16,
    nameKey: "prodMaxiGamme",
    descKey: "descGamme",
    salePrice: 45000,
    categoryKey: "catGammesCompletes",
    image: "/gamme complete 2.jpeg",
  },
];

const categoryKeys = [
  "all",
  "catHuileSerums",
  "catCremes",
  "catShampoings",
  "catSprays",
  "catSoinsNaturels",
  "catAccessoires",
  "catPacksKits",
  "catGammesCompletes",
];

const ProductPage = () => {
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [selectedCategoryKey, setSelectedCategoryKey] = useState("all");
  const [sortBy, setSortBy] = useState("Featured");

  // Filter by category and search query
  const filteredAndSortedProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (selectedCategoryKey !== "all") {
      result = result.filter((p) => p.categoryKey === selectedCategoryKey);
    }

    // Filter by search query (bilingual)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((product) => {
        const nameEn = translations[product.nameKey]?.en?.toLowerCase() || "";
        const nameFr = translations[product.nameKey]?.fr?.toLowerCase() || "";
        const catEn = translations[product.categoryKey]?.en?.toLowerCase() || "";
        const catFr = translations[product.categoryKey]?.fr?.toLowerCase() || "";
        return (
          nameEn.includes(query) ||
          nameFr.includes(query) ||
          catEn.includes(query) ||
          catFr.includes(query)
        );
      });
    }

    // Sort products
    switch (sortBy) {
      case "Price: Low to High":
        result = [...result].sort((a, b) => a.salePrice - b.salePrice);
        break;
      case "Price: High to Low":
        result = [...result].sort((a, b) => b.salePrice - a.salePrice);
        break;
      case "Newest":
        result = [...result].sort((a, b) => b.id - a.id);
        break;
      default: // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategoryKey, searchQuery, sortBy]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" as const },
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
            {t("allProducts")}
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
            <span>{t("allProducts")}</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Search Results Banner */}
          {searchQuery && (
            <motion.div
              className="flex items-center justify-between bg-[#f5e6e0] rounded-xl px-4 py-3 mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-gray-700">
                {t("searchResultsFor")} <span className="font-semibold">"{searchQuery}"</span> ({filteredAndSortedProducts.length} {t("productsCount")})
              </p>
              <Link
                href="/products"
                className="flex items-center gap-1 text-sm text-[#3d6b59] hover:underline"
              >
                <X size={16} />
                {t("clearSearch")}
              </Link>
            </motion.div>
          )}

          {/* Filters Bar */}
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <SlidersHorizontal size={18} className="text-gray-500" />
              {categoryKeys.slice(0, 6).map((catKey) => (
                <motion.button
                  key={catKey}
                  onClick={() => setSelectedCategoryKey(catKey)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategoryKey === catKey
                      ? "bg-[#3d6b59] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t(catKey)}
                </motion.button>
              ))}
              <div className="relative group">
                <motion.button
                  className="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                >
                  {t("more")}
                  <ChevronDown size={14} />
                </motion.button>
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 z-10 hidden group-hover:block min-w-[150px]">
                  {categoryKeys.slice(6).map((catKey) => (
                    <button
                      key={catKey}
                      onClick={() => setSelectedCategoryKey(catKey)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {t(catKey)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sort & Results */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {filteredAndSortedProducts.length} {t("productsCount")}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3d6b59]"
              >
                <option value="Featured">{t("featured")}</option>
                <option value="Price: Low to High">{t("priceLowHigh")}</option>
                <option value="Price: High to Low">{t("priceHighLow")}</option>
                <option value="Newest">{t("newest")}</option>
              </select>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`${selectedCategoryKey}-${searchQuery}-${sortBy}`}
          >
            {filteredAndSortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group"
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Product Image */}
                <motion.div
                  className="relative bg-[#f5e6e0] rounded-2xl aspect-square mb-4 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Category Badge removed */}
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={t(product.nameKey)}
                      width={400}
                      height={400}
                      className="object-contain w-full h-full bg-white p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <p className="text-sm">{t("productImage")}</p>
                        <p className="text-xs mt-1">{t(product.nameKey)}</p>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Product Info */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#3d6b59] transition-colors">
                    {t(product.nameKey)}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-1">
                    {t(product.descKey)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
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
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="border border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("loadMore")}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
