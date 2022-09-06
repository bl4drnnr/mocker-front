import { useState } from 'react';

import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import AvailableEndpoints from '@components/pages/index/AvailableEndpoints.component';
import Examples from '@components/pages/index/Examples.component';
import Intro from '@components/pages/index/Intro.component';
import WelcomeComponent from '@components/pages/index/Welcome.component';
import Modal from '@components/UI/Modal/Modal';
import Default from '@layouts/Default';
import {
  ContentWrapper,
  ContentContainer,
} from '@styles/pages/index.styles';
import { getStaticPaths, makeStaticProps } from 'src/lib/getStatic';

interface HomeProps {
  endpoints: Array<{ endpoint: string, count: number }>
  locale: string
  url: string
}

const Home: NextPage<HomeProps> = ({ endpoints, url, locale }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const handleRouteChange = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  const fetchData = async (path: string) => {
    window.open(`${url}${path}`, '_blank');
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
        <title>MOCKER | JSON data distributor</title>
      </Head>

      <WelcomeComponent
        title={t('pages:index.title')}
        startButton={t('pages:index.startButton')}
        search={t('components:header.search')}
        handleRedirect={handleRouteChange}
        showModal={() => setShowModal(true)}
      />

      <ContentWrapper>
        <ContentContainer>

          <Intro
            title={t('pages:index.introMenu.intro')}
            introText={t('pages:index.intro')}
            linkTo={t('pages:index.linkTo')}
            description1={t('pages:index.endpointsDescription1')}
            description2={t('pages:index.endpointsDescription2')}
            docs={t('pages:index.docs')}
          />

          <AvailableEndpoints
            title={t('pages:index.introMenu.availableEndpoints')}
            availableEndpoints={t('pages:index.availableEndpoints')}
            relation={t('pages:index.relation')}
            quantity={t('pages:index.quantity')}
            endpoints={endpoints}
          />

          <Examples
            title={t('pages:index.introMenu.examples')}
            fetchData={fetchData}
            intro={t('pages:index.examplesText')}
            allRecords1={t('pages:index.examples.allRecords1')}
            allRecords2={t('pages:index.examples.allRecords2')}
            specificRecord1={t('pages:index.examples.specificRecord1')}
            specificRecord2={t('pages:index.examples.specificRecord2')}
            pagination1={t('pages:index.examples.pagination1')}
            pagination2={t('pages:index.examples.pagination2')}
            and={t('common:and')}
            params={t('common:params')}
          />

        </ContentContainer>
      </ContentWrapper>

      <>
        {showModal ? (
          <Modal
            onClose={() => setShowModal(false)}
            locale={locale}
          />
        ) : null}
      </>
    </Default>
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components']);
export { getStaticPaths, getStaticProps };

export default Home;
