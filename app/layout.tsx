import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponents from "@/src/components/Navbar/NavbarComponents";
import { LanguageProvider } from "@/src/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://m7goat.vercel.app"),
  title: "M7 GOAT - La Base des Cheveux",
  description: "M7 GOAT - La Base des Cheveux. Découvrez nos produits capillaires naturels et efficaces pour stimuler la croissance, renforcer et sublimer vos cheveux. Livraison au Cameroun et dans le monde.",
  keywords: ["M7 GOAT", "soins capillaires", "cheveux", "huile capillaire", "croissance cheveux", "Cameroun", "produits naturels"],
  authors: [{ name: "M7 GOAT" }],
  creator: "M7 GOAT",
  publisher: "M7 GOAT",
  
  // Open Graph - Pour Facebook, WhatsApp, LinkedIn, etc.
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    siteName: "M7 GOAT",
    title: "M7 GOAT - La Base des Cheveux",
    description: "Découvrez nos produits capillaires naturels et efficaces pour stimuler la croissance, renforcer et sublimer vos cheveux. 🌟 Livraison au Cameroun et dans le monde.",
    images: [
      {
        url: "/logo.PNG",
        width: 1200,
        height: 630,
        alt: "M7 GOAT - La Base des Cheveux",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "M7 GOAT - La Base des Cheveux",
    description: "Découvrez nos produits capillaires naturels et efficaces pour stimuler la croissance, renforcer et sublimer vos cheveux. 🌟",
    images: ["/logo.PNG"],
    creator: "@m7goat",
  },
  
  // Icônes
  icons: {
    icon: "/logo.PNG",
    apple: "/logo.PNG",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <NavbarComponents />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
