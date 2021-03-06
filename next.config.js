module.exports = {
  reactStrictMode: true,
  trailingSlash: true,

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      
     }
  },
  
  images: {
    loader: "default",
    
  },
  
  async rewrites() {
    return [
      {
        source: '/empresas',
        destination: '/',
      },
    ];
  },
}