const { vanillaExtractPlugin } = require("@vanilla-extract/vite-plugin")

module.exports = {
  stories: ["../packages/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.plugins.push(vanillaExtractPlugin())

    // return the customized config
    return config
  },
  // webpackFinal: async (config, { configType }) => {
  //   config.plugins.push(new VanillaExtractPlugin())
  //   config.plugins.push(new MiniCssExtractPlugin())

  //   config.module.rules.push({
  //     test: /\.vanilla\.css$/i,
  //     use: [
  //       MiniCssExtractPlugin.loader,
  //       {
  //         loader: require.resolve("css-loader"),
  //         options: {
  //           url: false,
  //         },
  //       },
  //     ],
  //   })

  //   return config
  // },
}
