import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { mswLoader, initialize } from "msw-storybook-addon";

initialize({
  onUnhandledRequest: "bypass",
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  loaders: [mswLoader],
};

export default preview;
