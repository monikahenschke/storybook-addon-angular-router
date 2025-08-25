/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  framework: {
    name: "@storybook/angular",
    options: {}
  },

  core: {},
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["../preset.js", "@storybook/addon-docs"]
};
export default config;
