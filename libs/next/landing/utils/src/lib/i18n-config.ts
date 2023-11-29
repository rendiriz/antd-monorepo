import { Pathnames } from 'next-intl/navigation';

export const locales = ['id', 'en'] as const;

export const pathnames = {
  '/': '/',
  '/tentang': {
    id: '/tentang',
    en: '/about',
  },
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
