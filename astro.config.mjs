import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
