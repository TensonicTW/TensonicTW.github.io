import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { ui, locales, type Locale } from '../../i18n/ui';
import { localeOf, slugOf } from '../../i18n/utils';
import type { APIContext } from 'astro';

export function getStaticPaths() {
  return locales.map((locale) => ({ params: { locale } }));
}

export async function GET(context: APIContext) {
  const locale = context.params.locale as Locale;
  const [launches, posts] = await Promise.all([
    getCollection('launches', (e) => localeOf(e.id) === locale && !e.data.draft),
    getCollection('posts', (e) => localeOf(e.id) === locale && !e.data.draft),
  ]);

  const items = [
    ...launches.map((e) => ({
      title: e.data.title,
      description: e.data.summary,
      pubDate: e.data.date,
      link: `/${locale}/launches/${slugOf(e.id)}/`,
    })),
    ...posts.map((e) => ({
      title: e.data.title,
      description: e.data.summary,
      pubDate: e.data.date,
      link: `/${locale}/posts/${slugOf(e.id)}/`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: ui[locale]['site.name'],
    description: ui[locale]['site.description'],
    site: context.site!,
    items,
  });
}
