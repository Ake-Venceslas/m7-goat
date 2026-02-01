"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, User, ShoppingBag, Search, X, MessageSquare, BookOpen, Globe } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

const products = [
  { id: 1, name: "The Glow Revival Set", category: "Sets" },
  { id: 2, name: "Blemish Rescue System", category: "Treatment" },
  { id: 3, name: "Age-Defy Overnight Kit", category: "Sets" },
  { id: 4, name: "Vitamin C Brightening Serum", category: "Serums" },
  { id: 5, name: "Hyaluronic Acid Moisturizer", category: "Moisturizers" },
  { id: 6, name: "Retinol Night Cream", category: "Treatment" },
  { id: 7, name: "Gentle Foaming Cleanser", category: "Cleansers" },
  { id: 8, name: "Rose Petal Toner", category: "Toners" },
];

const NavbarComponents = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const mobileNavItems = [
    { href: "/", icon: Home, label: t("home") },
    { href: "/about", icon: User, label: t("about") },
    { href: "/products", icon: ShoppingBag, label: t("products") },
    { href: "/reviews", icon: MessageSquare, label: t("reviews") },
    { href: "/blog", icon: BookOpen, label: t("blogs") },
  ];

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full bg-[#f5e6e0] px-8 py-4 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold tracking-wide text-gray-900">
            M7 GOAT
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              href="/products"
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t("allProducts")}
            </Link>
            <Link
              href="/reviews"
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t("reviews")}
            </Link>
          </div>

          {/* Right Side - Icons and Login */}
          <div className="flex items-center gap-5">
            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 transition-colors px-2 py-1 rounded-full hover:bg-white/50"
              >
                <Globe size={18} />
                <span className="text-xs font-medium uppercase">{language}</span>
              </button>

              {/* Language Dropdown */}
              {isLangOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 min-w-[140px]">
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setIsLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                      language === "en"
                        ? "bg-[#3d6b59] text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-base">🇬🇧</span>
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("fr");
                      setIsLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                      language === "fr"
                        ? "bg-[#3d6b59] text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-base">🇫🇷</span>
                    <span>Français</span>
                  </button>
                </div>
              )}
            </div>

            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {isSearchOpen ? <X size={20} /> : <Search size={20} />}
              </button>

              {/* Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-4 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                  <form onSubmit={handleSearch} className="p-4">
                    <div className="relative">
                      <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        ref={inputRef}
                        type="text"
                        placeholder={t("searchProducts")}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3d6b59] text-sm"
                      />
                    </div>
                  </form>

                  {/* Search Results */}
                  {searchResults.length > 0 && (
                    <div className="border-t border-gray-100 max-h-64 overflow-y-auto">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products?search=${encodeURIComponent(product.name)}`}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-[#f5e6e0] rounded-lg flex items-center justify-center">
                            <ShoppingBag size={16} className="text-gray-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {product.name}
                            </p>
                            <p className="text-xs text-gray-500">{product.category}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* No Results */}
                  {searchQuery && searchResults.length === 0 && (
                    <div className="border-t border-gray-100 px-4 py-6 text-center">
                      <p className="text-sm text-gray-500">{t("noProductsFound")}</p>
                      <Link
                        href="/products"
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="text-sm text-[#3d6b59] font-medium mt-2 inline-block hover:underline"
                      >
                        {t("viewAllProducts")}
                      </Link>
                    </div>
                  )}

                  {/* Quick Links */}
                  {!searchQuery && (
                    <div className="border-t border-gray-100 px-4 py-3">
                      <p className="text-xs text-gray-400 mb-2">{t("popularSearches")}</p>
                      <div className="flex flex-wrap gap-2">
                        {["Serum", "Moisturizer", "Cleanser"].map((term) => (
                          <button
                            key={term}
                            onClick={() => setSearchQuery(term)}
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Navigation Bar - Glassmorphism + Pill Style */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <nav className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg shadow-black/10">
          {mobileNavItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#3d6b59] text-white shadow-md"
                    : "text-gray-600 hover:bg-white/50"
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span
                  className={`text-[10px] mt-1 font-medium transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {item.label}
                </span>
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#d4a094] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Spacer for mobile to prevent content from being hidden behind floating nav */}
      <div className="h-24 md:hidden" />
    </>
  );
};

export default NavbarComponents;
