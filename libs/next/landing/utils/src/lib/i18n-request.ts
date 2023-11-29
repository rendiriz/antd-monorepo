import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (
    await (locale === 'id'
      ? import('../../../dictionaries/id.json')
      : import(`../../../dictionaries/${locale}.json`))
  ).default,
}));
