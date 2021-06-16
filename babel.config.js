module.exports = function (api) {
  api.cache(true);
  return {
    "presets": ["@babel/preset-typescript"],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["."],
          "extensions": [".js", ".jsx", ".es", ".es6", ".mjs", ".ts", ".tsx"],
          "alias": {
            "@app": "./src",
            "@assets/images": "./src/assets/images",
            "@assets/scss": "./src/assets/scss",
            "@assets/svg": "./src/assets/svg",
            "@assets/font": "./src/assets/font",
            "@components/atoms": "./src/components/atoms",
            "@components/molecule": "./src/components/molecules",
            "@components/organisms": "./src/components/organisms",
            "@components/templates": "./src/components/templates",
            "@styles": "./src/styles",
            "@utils/constants": "./src/utils/constants",
            "@utils/contexts": "./src/utils/contexts",
            "@utils/mocks": "./src/utils/mocks",
            "@utils/helpers": "./src/utils/helpers",
            "@utils/hooks": "./src/utils/hooks",
            "@utils/libs": "./src/utils/libs"
          }
        }
      ]
    ]
  }
}