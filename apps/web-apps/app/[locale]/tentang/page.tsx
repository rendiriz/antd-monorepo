import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default async function TentangPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = await getTranslations('TentangPage');

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
