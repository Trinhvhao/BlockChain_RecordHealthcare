module.exports = {
  webpack: function (config, env) {
    // Thêm cấu hình webpack tùy chỉnh ở đây
    config.module.rules.push({
      test: /\.js$/,
      enforce: "pre",
      use: ["source-map-loader"],
    });

    config.ignoreWarnings = [/Failed to parse source map/];

    return config;
  },
};
