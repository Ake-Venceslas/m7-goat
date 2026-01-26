"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

const FooterComponents = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#3d6b59] py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">M7 GOAT</h3>
            <p className="text-sm text-white/80 mb-1">Tel: +77 586573843</p>
            <p className="text-sm text-white/80">Mon Sat 8am-7pm GMT</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t("navigation")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("allProducts")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t("company")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("reviews")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t("resources")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("termsConditions")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t("socialMedia")}</h4>
            <div className="flex flex-col gap-3">
              <Link
                href="https://instagram.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Youtube size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponents;
