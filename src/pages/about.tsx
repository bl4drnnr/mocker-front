import React from 'react';

import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Default from '@layouts/Default';
import { Container, Content, Link, Title, Wrapper } from '@styles/pages/about.styles';

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
          <Title>{t('pages:about.title')}</Title>

          <Content>
            <strong>Mocker - &nbsp;</strong>
            is absolutely&nbsp;<Link>open-source</Link>&nbsp;and free project, that had been created as learn project to learn 3 frameworks - React + Next.js and Nest.js and all AWS deployment staff.
          </Content>
          <Content>More about every part of project - front-end and back-end - you can find on
            <strong>GitHub</strong>
            pages listed below.
          </Content>
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
