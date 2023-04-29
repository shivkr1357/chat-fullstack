const path = require("path");

module.exports = {
  configure: {
    entry: "./src/App.tsx",
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@src": path.resolve(__dirname, "src"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
};
