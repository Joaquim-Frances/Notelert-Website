import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Genera archivos estáticos para GitHub Pages
  images: {
    unoptimized: true, // Necesario para static export
  },
  trailingSlash: true, // Recomendado para GitHub Pages
  // No necesitas basePath porque está en la raíz del dominio
};

export default nextConfig;
