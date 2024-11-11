/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true
  }
  // Tambahkan koma di sini untuk memisahkan properti rewrites dari properti lainnya
  // Konfigurasi lain yang diperlukan di sini
};

export default nextConfig
