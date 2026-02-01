import type { NextConfig } from "next";

const securityHeaders = [
  {
    // Protection contre le clickjacking - empêche d'intégrer ton site dans une iframe
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    // Protection XSS - empêche le navigateur d'exécuter du code malicieux
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Force HTTPS
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    // Contrôle les informations envoyées lors des redirections
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Désactive les fonctionnalités du navigateur non utilisées
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    // Protection XSS supplémentaire
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    // Content Security Policy - Contrôle les sources de contenu autorisées
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "media-src 'self' https: blob:",
      "connect-src 'self' https://wa.me https://api.whatsapp.com",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Headers de sécurité
  async headers() {
    return [
      {
        // Appliquer à toutes les routes
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  // Désactiver le header X-Powered-By (cache que c'est Next.js)
  poweredByHeader: false,

  // Optimisation des images
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
