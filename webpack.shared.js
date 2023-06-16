const paths = {
  APP_DIR: path.resolve(__dirname, "..", "src"),
};

exports.resolveRoot = [paths.APP_DIR, "node_modules"];

exports.aliases = {
  "@": path.resolve(paths.APP_DIR, ""),
};
