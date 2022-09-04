import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import i18nextConfig from '../../next-i18next.config.js';

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lang) => ({
    params: {
      locale: lang
    }
  }));

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
});

export async function getI18nProps(ctx: any, ns = ['pages', 'common', 'components']) {
  const locale = ctx?.params?.locale;
  return {
    ...(await serverSideTranslations(locale, ns)),
    locale
  };
}

export function makeStaticProps(ns: string[]) {
  return async function getStaticProps(ctx: any) {
    return {
      props: await getI18nProps(ctx, ns)
    };
  };
}
