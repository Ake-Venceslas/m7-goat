"use client";

import Link from "next/link";
import { User, Sparkles } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();

  const services = [
    { name: "Aromatherapy", icon: "✨" },
    { name: "Hydrotherapy", icon: "✨" },
    { name: "Reflexology", icon: "✨" },
    { name: "Stone Massage", icon: "✨" },
    { name: "Myofascial Release", icon: "✨" },
    { name: "Craniosacra Therapy", icon: "✨" },
    { name: "Thai Massage", icon: "✨" },
    { name: "Massage", icon: "✨" },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="bg-[#3d6b59] py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            {t("aboutUsTitle")}
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              {t("home")}
            </Link>
            <span>»</span>
            <span>{t("aboutUsTitle")}</span>
          </div>
        </div>
      </div>

      {/* Founder's Vision Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="bg-gray-100 rounded-lg aspect-[4/5] flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <User size={64} className="mx-auto mb-2" />
                  <p className="text-sm">Founder Image</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                {t("founderVision")}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                At Glower Glow, founder Emma Sterling pioneers a beauty revolution. Her visionary
                commitment to innovation, inclusivity, and cruelty-free practices defines our brand. Emma's
                passion resonates in every product, inspiring confidence and self-expression. Join us on a
                transformative journey to embrace your unique radiance.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Meet Emma Sterling, the driving force behind Glower Glow. A visionary leader committed to
                redefining beauty standards, Emma infuses innovation and inclusivity into every product,
                empowering individuals to embrace their unique radiance with confidence.
              </p>

              {/* Founder Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={24} className="text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Emma Sterling</h4>
                  <p className="text-sm text-gray-500">{t("ceoFounder")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Banner */}
      <div className="bg-[#3d3d3d] py-6">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-center md:text-left">
            <span className="font-serif italic">{t("questions")}</span>
            <span className="text-white/80 ml-2">
              {t("expertsHelp")}
            </span>
          </p>
          <Link
            href="/contact"
            className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-gray-900 transition-colors"
          >
            {t("getInTouch")}
          </Link>
        </div>
      </div>

      {/* Illuminate Beauty Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-6">
                {t("illuminateBeauty")}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8">
                At Glower Glow, we believe in empowering your beauty journey. Our curated
                collection of radiant products is designed to enhance your natural allure,
                fostering timeless confidence. Discover the glow within, effortlessly.
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#3d6b59]" />
                    <span className="text-sm text-gray-700">{service.name}</span>
                  </div>
                ))}
              </div>

              {/* Read More Button */}
              <Link
                href="/products"
                className="inline-block border border-gray-900 text-gray-900 px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors"
              >
                {t("readMore")}
              </Link>
            </div>

            {/* Right - Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f5e6e0] rounded-lg aspect-square flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <p className="text-sm">Product Image</p>
                </div>
              </div>
              <div className="bg-[#e8d8c8] rounded-lg aspect-square flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <p className="text-sm">Product Image</p>
                </div>
              </div>
              <div className="bg-[#f5e6e0] rounded-lg aspect-square flex items-center justify-center col-span-2">
                <div className="text-center text-gray-400">
                  <p className="text-sm">Beauty Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
