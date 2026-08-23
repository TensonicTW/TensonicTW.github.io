import { ui, type Locale, type UIKey } from './ui';

export function t(locale: Locale) {
  return (key: UIKey) => ui[locale][key] ?? ui.zh[key];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'zh' ? 'en' : 'zh';
}

export function localeOf(id: string): Locale {
  return id.startsWith('en/') ? 'en' : 'zh';
}

export function slugOf(id: string): string {
  return id.split('/').slice(1).join('/');
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-TW' : 'en-GB', {
    year: 'numeric',
    month: locale === 'zh' ? 'long' : 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
