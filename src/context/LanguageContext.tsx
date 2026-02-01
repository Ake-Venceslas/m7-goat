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
  heroTitle1: { en: "Love Your Hair,", fr: "Aimez Vos Cheveux," },
  heroTitle2: { en: "Every Day", fr: "Chaque Jour" },
  heroDescription: {
    en: "Elevate Your Hair with Clean, Science-Backed Hair Care— Cruelty-Free, Sustainable, and Packed with Natural Ingredients for Hair That Looks Healthy and Strong at Every Age.",
    fr: "Sublimez vos cheveux avec des soins capillaires propres et scientifiquement prouvés — sans cruauté, durables et riches en ingrédients naturels pour des cheveux sains et forts à tout âge.",
  },
  orderNow: { en: "Order Now", fr: "Commander" },
  findOutMore: { en: "Find Out More", fr: "En Savoir Plus" },
  trustedBy: { en: "Trusted by over 10,000+ clients worldwide since 2018.", fr: "Approuvé par plus de 10 000 clients dans le monde depuis 2018." },
  ratings: { en: "ratings", fr: "avis" },
  worldwideProducts: { en: "Worldwide products sold per year.", fr: "Produits vendus par an dans le monde." },

  // Why Our Hair Care Section
  whyTitle: { en: "Why Our Hair Care is Good for You – And Your Hair", fr: "Pourquoi Nos Soins Capillaires Sont Bons Pour Vous – Et Vos Cheveux" },
  cleanFormulas: { en: "Clean, Science-Backed Formulas", fr: "Formules Propres et Scientifiquement Prouvées" },
  cleanFormulasDesc: { en: "Every product is crafted with clinically proven ingredients that deliver real results for your hair.", fr: "Chaque produit est conçu avec des ingrédients cliniquement prouvés qui donnent de vrais résultats pour vos cheveux." },
  dermatologistTested: { en: "Expert-Tested & Hair-Loving", fr: "Testé par des Experts & Doux pour les Cheveux" },
  dermatologistTestedDesc: { en: "Whether you have dry, damaged, or thin hair, our products are designed to nourish, strengthen, and protect.", fr: "Que vous ayez des cheveux secs, abîmés ou fins, nos produits sont conçus pour nourrir, renforcer et protéger." },
  visibleResults: { en: "Visible Results You Can Trust", fr: "Des Résultats Visibles et Fiables" },
  goodForPlanet: { en: "Good for Your Hair, Good for the Planet", fr: "Bon pour Vos Cheveux, Bon pour la Planète" },
  recyclablePackaging: { en: "Recyclable packaging", fr: "Emballage recyclable" },
  veganCrueltyFree: { en: "Vegan & cruelty-free – Natural ingredients", fr: "Végan et sans cruauté – Ingrédients naturels" },

  // Products Section
  ourBestSellers: { en: "Our Best Sellers", fr: "Nos Meilleures Ventes" },
  seeAll: { en: "See All", fr: "Voir Tout" },
  add: { en: "Add", fr: "Ajouter" },
  loadMore: { en: "Load More Products", fr: "Charger Plus de Produits" },
  commander: { en: "Order", fr: "Commander" },
  productsCount: { en: "products", fr: "produits" },
  more: { en: "More", fr: "Plus" },
  productImage: { en: "Product Image", fr: "Image du Produit" },
  featuredImage: { en: "Featured Image", fr: "Image en Vedette" },
  blogImage: { en: "Blog Image", fr: "Image du Blog" },
  readMoreLink: { en: "Read More", fr: "Lire Plus" },

  // Reviews Section
  whatCustomersSay: { en: "What our customers have to say...", fr: "Ce que nos clients disent..." },
  review1: { 
    en: "I've struggled with dry, brittle hair for years, but this product has changed everything. After just one week, my hair feels soft and shiny—and the results are real! I love that it keeps my hair moisturized all day.", 
    fr: "J'ai lutté contre des cheveux secs et cassants pendant des années, mais ce produit a tout changé. Après seulement une semaine, mes cheveux sont doux et brillants — et les résultats sont réels ! J'adore qu'il garde mes cheveux hydratés toute la journée." 
  },
  review2: { 
    en: "I was skeptical, but this product truly stopped my hair breakage in under a month. It doesn't dry out my hair like other treatments, and my damaged ends are recovering fast.", 
    fr: "J'étais sceptique, mais ce produit a vraiment stoppé la casse de mes cheveux en moins d'un mois. Il ne dessèche pas mes cheveux comme les autres traitements, et mes pointes abîmées récupèrent rapidement." 
  },
  review3: { 
    en: "Frizz? Dullness? Gone. This elixir makes my hair look healthier and shinier than it has in years. I've gotten so many compliments and my sister even stole my bottle!", 
    fr: "Frisottis ? Cheveux ternes ? Disparus. Cet élixir rend mes cheveux plus sains et plus brillants qu'ils ne l'ont été depuis des années. J'ai reçu tellement de compliments et ma sœur m'a même volé mon flacon !" 
  },
  review4: { 
    en: "M7 GOAT products have completely transformed my hair. My curls are now defined, shiny and so soft. I can't recommend them enough!", 
    fr: "Les produits M7 GOAT ont complètement transformé mes cheveux. Mes boucles sont maintenant définies, brillantes et si douces. Je ne peux que les recommander !" 
  },
  review5: { 
    en: "After years of trying different products, I finally found the one. My hair has never been this strong and healthy. Thank you M7 GOAT!", 
    fr: "Après des années à essayer différents produits, j'ai enfin trouvé le bon. Mes cheveux n'ont jamais été aussi forts et sains. Merci M7 GOAT !" 
  },
  review6: { 
    en: "The elixir is pure magic! My hair grows faster and the breakage has stopped completely. Best investment for my hair care routine.", 
    fr: "L'élixir est de la pure magie ! Mes cheveux poussent plus vite et la casse a complètement cessé. Meilleur investissement pour ma routine capillaire." 
  },
  review7: { 
    en: "I was losing hope with my damaged hair, but M7 GOAT brought it back to life. The cream is incredibly nourishing and smells amazing!", 
    fr: "Je perdais espoir avec mes cheveux abîmés, mais M7 GOAT les a ramenés à la vie. La crème est incroyablement nourrissante et sent divinement bon !" 
  },
  review8: { 
    en: "The complete range is worth every penny. My scalp feels healthier and my hair has so much volume now. Absolutely love it!", 
    fr: "La gamme complète vaut chaque centime. Mon cuir chevelu est plus sain et mes cheveux ont tellement de volume maintenant. J'adore absolument !" 
  },
  review9: { 
    en: "Natural ingredients that actually work! My hair went from dry and brittle to soft and manageable. M7 GOAT is now my go-to brand.", 
    fr: "Des ingrédients naturels qui fonctionnent vraiment ! Mes cheveux sont passés de secs et cassants à doux et faciles à coiffer. M7 GOAT est maintenant ma marque préférée." 
  },

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
  founderVisionTitle: { en: "Founder's Vision – Revealing Hair Power with M7 GOAT", fr: "La Vision du Fondateur – Révéler la Puissance Capillaire avec M7 GOAT" },
  founderDesc1: { en: "At M7 GOAT, our founder embarked on a hair revolution. His visionary commitment to innovation, effectiveness and natural formulas defines our brand. His passion is reflected in every product, inspiring confidence and hair well-being. Join us on this transformative journey to reveal the beauty of your hair.", fr: "Chez M7 GOAT, notre fondateur a entrepris une révolution capillaire. Son engagement visionnaire envers l'innovation, l'efficacité et les formules naturelles définit notre marque. Sa passion se reflète dans chaque produit, inspirant confiance et bien-être capillaire. Rejoignez-nous dans ce voyage transformateur pour révéler la beauté de vos cheveux." },
  founderDesc2: { en: "Discover the driving force behind M7 GOAT. Borel Nechi, a visionary leader committed to redefining hair care standards, infusing innovation and expertise into every product, enabling everyone to embrace the health and vitality of their hair with confidence.", fr: "Découvrez la force motrice derrière M7 GOAT. Borel Nechi, un leader visionnaire engagé à redéfinir les standards des soins capillaires, infusant innovation et expertise dans chaque produit, permettant à chacun d'embrasser la santé et la vitalité de ses cheveux avec confiance." },
  ceoAndFounder: { en: "CEO and Founder", fr: "PDG et Fondateur" },
  illuminateDesc: { en: "At M7 GOAT, we believe in empowering your hair journey. Our carefully crafted collection of premium products is designed to stimulate growth, strengthen roots and enhance the natural beauty of your hair. Discover the inner strength of your hair, naturally.", fr: "Chez M7 GOAT, nous croyons en l'autonomisation de votre parcours capillaire. Notre collection soigneusement élaborée de produits premium est conçue pour stimuler la croissance, renforcer les racines et sublimer la beauté naturelle de vos cheveux. Découvrez la force intérieure de vos cheveux, naturellement." },

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
  catHuileSerums: { en: "Oils & Hair Serums", fr: "Huiles & Serums Capillaires" },
  catCremes: { en: "Hair Creams", fr: "Cremes Capillaires" },
  catShampoings: { en: "Hair Shampoos", fr: "Shampoings Capillaires" },
  catSprays: { en: "Hair Sprays", fr: "Sprays Capillaires" },
  catSoinsNaturels: { en: "Natural Care", fr: "Soins Naturels" },
  catAccessoires: { en: "Hair Accessories", fr: "Accesoires Capillaires" },
  catPacksKits: { en: "Packs & Kits", fr: "Packs & Kits Capillaires" },
  catGammesCompletes: { en: "Complete Ranges", fr: "Gammes Completes" },

  // Product Names
  prodCreme: { en: "Cream", fr: "Creme" },
  prodDermaroleur: { en: "Dermaroller", fr: "Dermaroleur" },
  prodMiniElixir: { en: "Mini Elixir", fr: "Mini Elixir" },
  prodMaxiElixir: { en: "Maxi Elixir", fr: "Maxi Elixir" },
  prodElixirCreme: { en: "Elixir & Cream", fr: "Elixir & Creme" },
  prodElixirDermaroleur: { en: "Elixir & Dermaroller", fr: "Elixir & Dermaroleur" },
  prodElixirEpices: { en: "Elixir & Spices", fr: "Elixir & Epices" },
  prodElixirShampoing: { en: "Elixir & Shampoo", fr: "Elixir & Shampoing" },
  prodElixirSpray: { en: "Elixir & Spray", fr: "Elixir & Spray" },
  prodElixirSprayShampoing: { en: "Elixir, Spray & Shampoo", fr: "Elixir, Spray & Shampoing" },
  prodElixirSprayShampoingCreme: { en: "Elixir, Spray, Shampoo & Cream", fr: "Elixir, Spray, Shampoing & Creme" },
  prodEpices: { en: "Spices", fr: "Epices" },
  prodShampoing: { en: "Shampoo", fr: "Shampoing" },
  prodSpray: { en: "Spray", fr: "Spray" },
  prodMiniGamme: { en: "Mini Complete Range", fr: "Mini Gamme Complete" },
  prodMaxiGamme: { en: "Maxi Complete Range", fr: "Maxi Gamme Complete" },

  // Product Descriptions
  descCreme: { 
    en: "The secret to infinite softness. A melting texture that infuses hydration into the core of the fiber for supple, manageable, frizz-free hair", 
    fr: "Le secret d'une douceur infinie. Une texture fondante qui infuse l'hydratation au coeur de la fibre pour des cheveux souples, dociles et sans frisottis" 
  },
  descDermaroleur: { 
    en: "A micro-needle technology designed to activate microcirculation and open pores", 
    fr: "Une technologie de micro - aiguilles concue pour activer la microcirculation et ouvrir les pores" 
  },
  descElixir: { 
    en: "Awaken your hair potential. A concentrated formula that stimulates the root for visibly stronger and denser growth", 
    fr: "Reveillez votre potentiel capillaire. Une formule concentree qui stimule la racine pour une croissance visiblement plus forte et dense" 
  },
  descPack: { 
    en: "The excellence of M7 GOAT care in a box. Strategic combinations designed to address all your hair problems with enhanced effectiveness. The complete solution for exceptional hair", 
    fr: "L'excellence du soin M7 GOAT en coffret. Des combinaisons strategiques concues pour repondre a toutes vous problemes capillaires avec une efficacite renforcee. La solution complete pour une chevelure d'exception" 
  },
  descElixirDermaroleur: { 
    en: "A micro-needle technology designed to activate microcirculation and open pores. It ideally prepares the scalp to deeply absorb your M7 GOAT serums and oils", 
    fr: "Une technologie de micro - aiguilles concue pour activer la microcirculation et ouvrir les pores. Il prepare idealement le cuir chevelu a absorber en profondeur vos serums et huiles M7 GOAT" 
  },
  descGamme: { 
    en: "Why choose when you can have it all? Enjoy the benefits of our three flagship products in one convenient and economical box", 
    fr: "Pourquoi choisir quand on peut tout avoir ? Profitez des bienfaits de nos trois produits phares dans un seul coffret pratique et economique" 
  },
  descEpices: { 
    en: "A cocktail of precious spices designed to stimulate the root and strengthen the fiber. The essence of nature for boosted growth and visibly stronger hair", 
    fr: "Un cocktail d'epices precieuses concu pour stimuler la racine et fortifier la fibre. L'essence de la nature pour une croissance boostee et des cheveux visiblement plus forts" 
  },
  descShampoing: { 
    en: "The ultimate bath. Gently cleanses while infusing essential nutrients to repair and protect the driest hair", 
    fr: "Le bain absolu. Nettoie delicatement tout en infusant les nutriments essentiels pour reparer et proteger les cheveux les plus secs" 
  },
  descSpray: { 
    en: "Continuous hydration source. Tones, refreshes and disciplines for supple and radiantly healthy hair", 
    fr: "Source d'hydratation continue. Tonifie, rafraichit et discipline pour une chevelure souple et eclatante de sante" 
  },
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
