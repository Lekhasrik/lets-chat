module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Disable source map loader for node_modules
      const rules = webpackConfig.module.rules.map(rule => {
        if (rule.use) {
          rule.use = rule.use.map(u => {
            if (u.loader && u.loader.includes("source-map-loader")) {
              return { ...u, exclude: /node_modules/ };
            }
            return u;
          });
        }
        return rule;
      });

      webpackConfig.module.rules = rules;
      return webpackConfig;
    }
  }
};
