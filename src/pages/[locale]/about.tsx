import React from 'react';

import classNames from 'classnames';
import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import Default from '@layouts/Default';
import { Container, Text, Wrapper, Link, Title } from '@styles/common/common.styles';
import { getStaticPaths } from 'src/lib/getStatic';

interface AboutProps {
  locale: string
}

const About: NextPage<AboutProps> = ({ locale }) => {
  const { t } = useTranslation();

  const handleRedirect = (path: string) => {
    window.open(path, '_blank');
  };

  return (
    <Default
      header={{
        docs: t('components:header.docs'),
        about: t('components:header.about'),
        defaultLanguage: locale
      }}
      footer={{
        docs: t('components:header.docs'),
        about: t('components:header.about'),
        rights: t('common:right'),
        defaultLanguage: locale
      }}
    >
      <Head>
        <title>MOCKER | {t('pages:about.title')}</title>
      </Head>

      <Wrapper>
        <Container>
          <Title>{t('pages:about.title')}</Title>

          <Text className={classNames({ about: true })}>
            <strong>Mocker</strong> - {t('pages:about.description')}
          </Text>

          <Text className={classNames({ about: true })}>
            {t('pages:about.more')}
          </Text>

          <Title>{t('pages:about.contact')}</Title>

          <Text className={classNames({ about: true })}>
            {t('pages:about.contactTitle')}
            <Link
              onClick={() => handleRedirect('https://github.com/bl4drnnr')}
            >GitHub
            </Link>, <Link
              onClick={() => handleRedirect('https://www.linkedin.com/in/mikhail-bahdashych-a8561a209/\'')}
            >LinkedIn
            </Link>
          </Text>
        </Container>
      </Wrapper>
    </Default>
  );
};

const getStaticProps: GetStaticProps = async (context) => {
  const locale = context?.params?.locale;

  return {
    props: {
    ...(await serverSideTranslations(locale as string, ['pages', 'components', 'common'])),
      locale
    }
  };
};

export { getStaticPaths, getStaticProps };

export default About;
