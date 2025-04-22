import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'standalone', 
  webpack: (config) => {
    // Resolving the '@' alias to the 'src' directory
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    };

    return config;
  },
};

export default nextConfig;
