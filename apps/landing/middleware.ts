import createMiddleware from 'next-intl/middleware';
import { pathnames, locales } from '@antd-monorepo/next/landing/utils';

export default createMiddleware({
  defaultLocale: 'id',
  localePrefix: 'as-needed',
  locales,
  pathnames,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!_next|.*\\..*).*)'],
};
