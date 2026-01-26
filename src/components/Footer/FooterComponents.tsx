import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

const FooterComponents = () => {
  return (
    <footer className="w-full bg-[#f5e6e0] py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">ZIVERA</h3>
            <p className="text-sm text-gray-700 mb-1">Tel: +77 586573843</p>
            <p className="text-sm text-gray-700">Mon Sat 8am-7pm GMT</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  All products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Term& Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Social Media</h4>
            <div className="flex flex-col gap-3">
              <Link
                href="https://instagram.com"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-gray-700 hover:text-gray-900 transition-colors"
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
