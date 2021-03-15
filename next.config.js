const withBundleAnalyzer = require("@next/bundle-analyzer");
const withFonts = require("next-fonts");

module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(withFonts());
