import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://tensonictw.github.io';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
    routing: { prefixDefaultLocale: true },
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'zh', locales: { zh: 'zh-Hant-TW', en: 'en' } } })],
  build: { format: 'directory' },
});
