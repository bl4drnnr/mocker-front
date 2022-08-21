import React from 'react';

import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Default from '@layouts/Default';
import { Container, Title, Wrapper } from '@styles/pages/about.styles';

const About = () => {
  const { t } = useTranslation();

  return (
    <Default
      header={{
        docs: t('components:header.docs'),
        search: t('components:header.about'),
        about: t('components:header.search')
      }}
    >
      <Wrapper>
        <Container>
          <Title>About project</Title>
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
