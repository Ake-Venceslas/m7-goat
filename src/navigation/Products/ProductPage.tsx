"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  description: string;
  salePrice: number;
  category: string;
  image?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Creme",
    description: "Le secret d'une douceur infinie. Une texture fondante qui infuse l'hydratation au coeur de la fibre pour des cheveux souples, dociles et sans frisottis",
    salePrice: 6000,
    category: "Cremes Capillaires",
    image: "/Creme.jpeg",
  },
  {
    id: 2,
    name: "Dermaroleur",
    description: "Une technologie de micro - aiguilles concue pour activer la microcirculation et ouvrir les pores",
    salePrice: 10000,
    category: "Accessories Capillaires",
    image: "/dermaroleur.jpeg",
  },
  {
    id: 3,
    name: "Mini Elixir",
    description: "Reveillez votre potentiel capillaire. Une formule concentree qui stimule la racine pour une croissance visiblement plus forte et dense",
    salePrice: 5000,
    category: "Huiles & Serums Capillaires",
    image: "/elixir 5k.jpeg",
  },
  {
    id: 4,
    name: "Maxi Elixir",
    description: "Reveillez votre potentiel capillaire. Une formule concentree qui stimule la racine pour une croissance visiblement plus forte et dense",
    salePrice: 8000,
    category: "Huiles & Serums Capillaires",
    image: "/elixir 8k.jpeg",
  },
  {
    id: 5,
    name: "Elixir & Creme",
    description: "L'excellence du soin M7 GOAT en coffret. Des combinaisons strategiques concues pour repondre a toutes vous problemes capillaires avec une efficacite renforcee. La solution complete pour une chevelure d'exception",
    salePrice: 11000,
    category: "Packs & Kits Capillaires",
    image: "/elixir et creme.jpeg",
  },
  {
    id: 6,
    name: "Elixir & Dermaroleur",
    description: "Une technologie de micro - aiguilles concue pour activer la microcirculation et ouvrir les pores. Il prepare idealement le cuir chevelu a absorber en profondeur vos serums et huiles M7 GOAT",
    salePrice: 15000,
    category: "Packs & Kits Capillaires",
    image: "/elixir et dermaroleur.jpeg",
  },
  {
    id: 7,
    name: "Elixir & Epices",
    description: "L'excellence du soin M7 GOAT en coffret. Des combinaisons strategiques concues pour repondre a toutes vous problemes capillaires avec une efficacite renforcee. La solution complete pour une chevelure d'exception",
    salePrice: 8500,
    category: "Packs & Kits Capillaires",
    image: "/elixir et epices.jpeg",
  },
  {
    id: 8,
    name: "Elixir & Shampoing",
    description: "L'excellence du soin M7 GOAT en coffret. Des combinaisons strategiques concues pour repondre a toutes vous problemes capillaires avec une efficacite renforcee. La solution complete pour une chevelure d'exception",
    salePrice: 12000,
    category: "Packs & Kits Capillaires",
    image: "/elixir et shampoing.jpeg",
  },
  {
    id: 9,
    name: "Elixir & Spray",
    description: "L'excellence du soin M7 GOAT en coffret. Des combinaisons strategiques concues pour repondre a toutes vous problemes capillaires avec une efficacite renforcee. La solution complete pour une chevelure d'exception",
    salePrice: 10000,
    category: "Packs & Kits Capillaires",
    image: "/elixir et spray.jpeg",
  },
  {
    id: 10,
    name: "Elixir, Spray & Shampoing",
    description: "Pourquoi choisir quand on peut tout avoir ? Profitez des bienfaits de nos trois produits phares dans un seul coffret pratique et economique",
    salePrice: 17000,
    category: "Pack & Kits Capillaires",
    image: "/elixir, spray, shampoing.jpeg",
  },
  {
    id: 11,
    name: "Elixir, Spray, Shampoing & Creme",
    description: "Pourquoi choisir quand on peut tout avoir ? Profitez des bienfaits de nos trois produits phares dans un seul coffret pratique et economique",
    salePrice: 23000,
    category: "Packs & Kits Capillaires",
    image: "/elixir,spray,shampoing,creme.jpeg",
  },
  {
    id: 12,
    name: "Epices",
    description: "Un cocktail d'epices precieuses concu pour stimuler la racine et fortifier la fibre. L'essence de la nature pour une croissance boostee et des cheveux visiblement plus forts",
    salePrice: 3500,
    category: "Soins Naturels",
    image: "/Epices.jpeg",
  },
  {
    id: 13,
    name: "Shampoing",
    description: "Le bain absolu. Nettoie delicatement tout en infusant les nutriments essentiels pour reparer et proteger les cheveux les plus secs",
    salePrice: 7000,
    category: "Shampoings Capillaires",
    image: "/Shampoing.jpeg",
  },
  {
    id: 14,
    name: "Spray",
    description: "Source d'hydratation continue. Tonifie, rafraichit et discipline pour une chevelure souple et eclatante de sante",
    salePrice: 5000,
    category: "Sprays Capillaires",
    image: "/spray.jpeg",
  },
  {
    id: 15,
    name: "Mini Gamme Complete",
    description: "Pourquoi choisir quand on peut tout avoir ? Profitez des bienfaits de nos trois produits phares dans un seul coffret pratique et economique",
    salePrice: 35000,
    category: "Gammes Completes",
    image: "/gamme complete 1.jpeg",
  },
  {
    id: 16,
    name: "Maxi Gamme Complete",
    description: "Pourquoi choisir quand on peut tout avoir ? Profitez des bienfaits de nos trois produits phares dans un seul coffret pratique et economique",
    salePrice: 45000,
    category: "Gammes Completes",
    image: "/gamme complete 2.jpeg",
  },
];

const categories = [
  "All",
  "Huiles & Serums Capillaires",
  "Cremes Capillaires",
  "Shampoings Capillaires",
  "Sprays Capillaires",
  "Soins Naturels",
  "Accesoires Capillaires",
  "Packs & Kits Capillaires",
  "Gammes Completes",
];

const ProductPage = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
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
              {categories.slice(0, 6).map((category) => (
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
              <div className="relative group">
                <motion.button
                  className="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                >
                  More
                  <ChevronDown size={14} />
                </motion.button>
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 z-10 hidden group-hover:block min-w-[150px]">
                  {categories.slice(6).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sort & Results */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {filteredProducts.length} products
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3d6b59]"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory}
          >
            {filteredProducts.map((product, index) => (
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
                      alt={product.name}
                      width={400}
                      height={400}
                      className="object-contain w-full h-full bg-white p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <p className="text-sm">Product Image</p>
                        <p className="text-xs mt-1">{product.name}</p>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Product Info */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#3d6b59] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-1">
                    {product.description}
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
                        const phoneNumber = "237678691969"; // Remplacez par le numéro WhatsApp du vendeur
                        const message = `Bonjour M7 GOAT! 🌟\n\nJe suis intéressé(e) par:\n📦 *${product.name}*\n💰 Prix: ${product.salePrice} FCFA\n\nPouvez-vous me donner plus d'informations?\n\nMerci!`;
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors mt-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                  Commander
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
