import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  eslint: {
    ignoreDuringBuilds: true
  }
  // Konfigurasi lain yang diperlukan di sini
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
