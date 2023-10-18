import './global.css';
import cn from 'classnames';
import { inter } from '@antd-monorepo/next/shared/utils';
import { site } from '@antd-monorepo/next/landing/utils';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: {
    default: site.title,
    template: `%s — ${site.title}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn([inter.variable])}>
      <body>{children}</body>
    </html>
  );
}
