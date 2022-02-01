module.exports = {
  reactStrictMode: true,
  trailingSlash: true,

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/empresas': { page: '/' },
      
     }
  },
  images: {
    loader: "default",
    
  },

}