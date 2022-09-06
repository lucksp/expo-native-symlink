// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// UNCOMMENT NEXT LINE && match path to your local link location
const workspaceRoot = path.resolve(__dirname, "../flask");
const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);

const assetExts = defaultConfig.resolver.assetExts;
const sourceExts = defaultConfig.resolver.sourceExts;

defaultConfig.resolver = {
  assetExts: assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...sourceExts, "svg"],
};
defaultConfig.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
  // UNCOMMENT NEXT LINE
  path.resolve(workspaceRoot, "packages/mobile/node_modules"),
];
// UNCOMMENT NEXT LINE
defaultConfig.watchFolders = [path.resolve(workspaceRoot)];

module.exports = defaultConfig;
