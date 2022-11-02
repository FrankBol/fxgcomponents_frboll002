module.exports = {
  stories: [
    // "../lib/src/**/*.stories.mdx",
    "../lib/src/**/*.stories.@(js|jsx|ts|tsx)"
    // "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/react",
  staticDirs: [{ from: '../lib/src/assets', to: '/assets' }]
};