import Link from 'next/link';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Button, ConfigProvider } from 'antd';
import { add, theme } from '@antd-monorepo/shared/utils';
import { locales } from '@antd-monorepo/next/landing/utils';

type Props = {
  params: { locale: string };
};

export default async function Index({ params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) <div>Not Found</div>;

  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = await getTranslations('IndexPage');

  const testSharedUtils = add(1, 1);

  return (
    <ConfigProvider theme={theme}>
      <div className="container flex h-full flex-col">
        <h4 className="text-blue-500">{t('title')}</h4>
        <div className="text-blue-500">Add = {testSharedUtils}</div>

        <Link
          href="/tentang"
          passHref
          legacyBehavior
        >
          <Button
            type="primary"
            block
          >
            With Sub Components
          </Button>
        </Link>
      </div>
    </ConfigProvider>
  );
}
