import React from 'react';

import classNames from 'classnames';
import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Default from '@layouts/Default';
import { Container, Text, Wrapper, Link, CommonTitle, Title } from '@styles/common/common.styles';

const About: NextPage = () => {
  const { t } = useTranslation();

  const handleRedirect = (path: string) => {
    window.open(path, '_blank');
  };

  return (
    <Default
      header={{
        docs: t('components:header.docs'),
        about: t('components:header.about')
      }}
    >
      <Wrapper>
        <Container>
          <Title>{t('pages:about.title')}</Title>

          <Text className={classNames({ about: true })}>
            <strong>Mocker</strong> - {t('pages:about.description')}
            <Link onClick={() => handleRedirect('https://reactjs.org/')}>React</Link> +	&nbsp;
            <Link onClick={() => handleRedirect('https://nextjs.org/')}>Next.js</Link>&nbsp;
            {t('pages:common.and')}&nbsp;
            <Link onClick={() => handleRedirect('https://nestjs.com/')}>Nest.js</Link>
            {t('pages:about.descriptionAws')}
          </Text>

          <Text
            className={classNames({ about: true })}
          >{t('pages:about.more')}<strong>GitHub</strong>{t('pages:about.pages')}</Text>

          <CommonTitle>{t('pages:about.contact')}</CommonTitle>
          <Text className={classNames({ about: true })}>
            {t('pages:about.contactTitle')}
            <Link
              className={classNames({ contact: true })}
              onClick={() => handleRedirect('https://github.com/bl4drnnr')}
            >GitHub</Link> or&nbsp;
            <Link
              className={classNames({ contact: true })}
              onClick={() => handleRedirect('https://www.linkedin.com/in/mikhail-bahdashych-a8561a209/')}
            >LinkedIn.</Link>
          </Text>
        </Container>
      </Wrapper>
    </Default>
  );
};

export const getStaticProps: GetStaticProps = async ({
 locale
}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['pages', 'components'])),
  },
});

export default About;
