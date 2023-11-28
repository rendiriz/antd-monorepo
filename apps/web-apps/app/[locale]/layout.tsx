import Link from 'next/link';
import cn from 'classnames';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { inter } from '@antd-monorepo/next/shared/utils';
import { locales } from '@antd-monorepo/next/web-apps/utils';
import { Provider } from '@antd-monorepo/next/web-apps/components';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    icons: {
      icon: '/favicon.ico',
    },
    title: {
      default: t('title'),
      template: `%s — ${t('title')}`,
    },
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locales.includes(locale as any)) <div>Not Found</div>;

  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={cn([inter.variable])}
    >
      <body className="bg-gray-200">
        <section className="relative mx-auto flex h-[100dvh] w-full max-w-[425px] flex-1 flex-col bg-white">
          <header>
            <nav className="h-12 bg-white">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/tentang">Tentang</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="flex h-full flex-col overflow-x-hidden">
            <Provider>{children}</Provider>
          </main>
        </section>
      </body>
    </html>
  );
}
