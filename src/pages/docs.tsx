import React from 'react';

import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Default from '@layouts/Default';
import { Container, Title, Text } from '@styles/common/common.styles';
import { ContentSidebar, Wrapper } from '@styles/pages/docs.styles';


const Docs = () => {
  const { t } = useTranslation();

  return (
    <Default
      header={{
        docs: t('components:header.docs'),
        about: t('components:header.about'),
        colorChangePx: 0
      }}
    >
      <>
        <ContentSidebar/>
        <Wrapper>
        </Wrapper>
      </>
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

export default Docs;
