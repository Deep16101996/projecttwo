/** @type {import('next').NextConfig} */
const nextConfig = {
     experimental: {
    appDir: true,
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['mongoose']
     },
      webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  }
};

export default nextConfig;
