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
}
