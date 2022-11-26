import { resolve } from "path"

module.exports = {
  stories: [
    "../stories/*.stories.mdx",
    "../stories/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: {
          ...config.resolve.alias,
          "@acme/ui": resolve(__dirname, "../../../packages/acme-ui/"),
        },
      },
    }
  },
}
