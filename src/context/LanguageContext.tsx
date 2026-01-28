"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "fr";

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

// All translations for the site
export const translations: Translations = {
  // Navbar
  home: { en: "Home", fr: "Accueil" },
  about: { en: "About", fr: "À propos" },
  allProducts: { en: "All Products", fr: "Tous les Produits" },
  reviews: { en: "Reviews", fr: "Avis" },
  blogs: { en: "Blogs", fr: "Blog" },
  products: { en: "Products", fr: "Produits" },
  searchProducts: { en: "Search products...", fr: "Rechercher des produits..." },
  noProductsFound: { en: "No products found", fr: "Aucun produit trouvé" },
  viewAllProducts: { en: "View all products", fr: "Voir tous les produits" },
  popularSearches: { en: "Popular searches", fr: "Recherches populaires" },

  // Hero Section
  freeDelivery: { en: "FREE DELIVERY WORLDWIDE", fr: "LIVRAISON GRATUITE DANS LE MONDE" },
  heroTitle1: { en: "Love Your Skin,", fr: "Aimez Votre Peau," },
  heroTitle2: { en: "Every Day", fr: "Chaque Jour" },
  heroDescription: {
    en: "Elevate Your Glow with Clean, Science-Backed Skincare— Cruelty-Free, Sustainable, and Packed with Antioxidants for Skin That Looks Healthy at Every Age.",
    fr: "Sublimez votre éclat avec des soins propres et scientifiquement prouvés — sans cruauté, durables et riches en antioxydants pour une peau saine à tout âge.",
  },
  orderNow: { en: "Order Now", fr: "Commander" },
  findOutMore: { en: "Find Out More", fr: "En Savoir Plus" },
  trustedBy: { en: "Trusted by over 10,000+ clients worldwide since 2018.", fr: "Approuvé par plus de 10 000 clients dans le monde depuis 2018." },
  ratings: { en: "ratings", fr: "avis" },
  worldwideProducts: { en: "Worldwide products sold per year.", fr: "Produits vendus par an dans le monde." },

  // Why Our Skincare Section
  whyTitle: { en: "Why Our Skincare is Good for You – And Your Skin", fr: "Pourquoi Nos Soins Sont Bons Pour Vous – Et Votre Peau" },
  cleanFormulas: { en: "Clean, Science-Backed Formulas", fr: "Formules Propres et Scientifiquement Prouvées" },
  cleanFormulasDesc: { en: "Every product is crafted with clinically proven ingredients that deliver real results.", fr: "Chaque produit est conçu avec des ingrédients cliniquement prouvés qui donnent de vrais résultats." },
  dermatologistTested: { en: "Dermatologist-Tested & Skin-Loving", fr: "Testé par des Dermatologues & Doux pour la Peau" },
  dermatologistTestedDesc: { en: "Whether you have sensitive, acne-prone, or mature skin, our products are designed to soothe irritation, balance oil production, and protect and repair.", fr: "Que vous ayez une peau sensible, à tendance acnéique ou mature, nos produits sont conçus pour apaiser, équilibrer et protéger." },
  visibleResults: { en: "Visible Results You Can Trust", fr: "Des Résultats Visibles et Fiables" },
  goodForPlanet: { en: "Good for Your Skin, Good for the Planet", fr: "Bon pour Votre Peau, Bon pour la Planète" },
  recyclablePackaging: { en: "Recyclable packaging", fr: "Emballage recyclable" },
  veganCrueltyFree: { en: "Vegan & cruelty-free – Certified by Leaping Bunny", fr: "Végan et sans cruauté – Certifié par Leaping Bunny" },

  // Products Section
  ourBestSellers: { en: "Our Best Sellers", fr: "Nos Meilleures Ventes" },
  seeAll: { en: "See All", fr: "Voir Tout" },
  add: { en: "Add", fr: "Ajouter" },
  loadMore: { en: "Load More Products", fr: "Charger Plus de Produits" },

  // Reviews Section
  whatCustomersSay: { en: "What our customers have to say...", fr: "Ce que nos clients disent..." },

  // Footer
  navigation: { en: "Navigation", fr: "Navigation" },
  company: { en: "Company", fr: "Entreprise" },
  resources: { en: "Resources", fr: "Ressources" },
  socialMedia: { en: "Social Media", fr: "Réseaux Sociaux" },
  aboutUs: { en: "About us", fr: "À propos" },
  contact: { en: "Contact", fr: "Contact" },
  privacyPolicy: { en: "Privacy Policy", fr: "Politique de Confidentialité" },
  termsConditions: { en: "Terms & Conditions", fr: "Conditions Générales" },

  // About Page
  aboutUsTitle: { en: "About Us", fr: "À Propos de Nous" },
  founderVision: { en: "Founder's Vision Illuminating Beauty at Glower Glow", fr: "La Vision de la Fondatrice Illuminant la Beauté chez Glower Glow" },
  ceoFounder: { en: "Ceo and founder", fr: "PDG et fondatrice" },
  questions: { en: "Questions ?", fr: "Questions ?" },
  expertsHelp: { en: "Our experts will help find the gear that's right for you", fr: "Nos experts vous aideront à trouver ce qu'il vous faut" },
  getInTouch: { en: "Get In Touch", fr: "Contactez-Nous" },
  illuminateBeauty: { en: "Illuminate Beauty Timeless Confidence.", fr: "Illuminez la Beauté, Confiance Intemporelle." },
  readMore: { en: "READ MORE", fr: "EN SAVOIR PLUS" },

  // Blog Page
  beautyBlog: { en: "Beauty Blog", fr: "Blog Beauté" },
  blogDescription: { en: "Discover skincare tips, beauty trends, and expert advice to help you achieve your healthiest, most radiant skin.", fr: "Découvrez des conseils soins, les tendances beauté et des conseils d'experts pour une peau saine et éclatante." },
  featuredArticles: { en: "Featured Articles", fr: "Articles en Vedette" },
  searchArticles: { en: "Search articles...", fr: "Rechercher des articles..." },
  loadMoreArticles: { en: "Load More Articles", fr: "Charger Plus d'Articles" },
  noArticlesFound: { en: "No articles found. Try a different search or category.", fr: "Aucun article trouvé. Essayez une autre recherche ou catégorie." },
  subscribeNewsletter: { en: "Subscribe to Our Newsletter", fr: "Abonnez-vous à Notre Newsletter" },
  newsletterDesc: { en: "Get the latest skincare tips, exclusive offers, and beauty insights delivered straight to your inbox.", fr: "Recevez les derniers conseils soins, offres exclusives et astuces beauté directement dans votre boîte mail." },
  enterEmail: { en: "Enter your email", fr: "Entrez votre email" },
  subscribe: { en: "Subscribe", fr: "S'abonner" },
  minRead: { en: "min read", fr: "min de lecture" },

  // Products Page
  filter: { en: "Filter", fr: "Filtrer" },
  featured: { en: "Featured", fr: "En vedette" },
  priceLowHigh: { en: "Price: Low to High", fr: "Prix: Croissant" },
  priceHighLow: { en: "Price: High to Low", fr: "Prix: Décroissant" },
  newest: { en: "Newest", fr: "Plus récent" },
  order: { en: "Order", fr: "Commander" },

  // Categories
  all: { en: "All", fr: "Tout" },
  sets: { en: "Sets", fr: "Coffrets" },
  serums: { en: "Serums", fr: "Sérums" },
  moisturizers: { en: "Moisturizers", fr: "Hydratants" },
  treatment: { en: "Treatment", fr: "Traitement" },
  cleansers: { en: "Cleansers", fr: "Nettoyants" },
  toners: { en: "Toners", fr: "Toniques" },
  sunCare: { en: "Sun Care", fr: "Protection Solaire" },
  eyeCare: { en: "Eye Care", fr: "Soins Yeux" },
  exfoliators: { en: "Exfoliators", fr: "Exfoliants" },
  masks: { en: "Masks", fr: "Masques" },
  lipCare: { en: "Lip Care", fr: "Soins Lèvres" },
  bodyCare: { en: "Body Care", fr: "Soins Corps" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
