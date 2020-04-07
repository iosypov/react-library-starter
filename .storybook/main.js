module.exports = {
  stories: ["../src/**/*.stories.(ts|tsx|js|jsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {},
      },
    },
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ]
};
