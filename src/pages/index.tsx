import { useState } from 'react';

import classNames from 'classnames';
import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import AvailableEndpoints from '@components/pages/index/AvailableEndpoints.component';
import Intro from '@components/pages/index/Intro.component';
import WelcomeComponent from '@components/pages/index/Welcome.component';
import Button from '@components/UI/Button/Button';
import Default from '@layouts/Default';
import {
  CodeSpan,
  Code,
  CodeLine,
  Title,
  Text,
} from '@styles/common/common.styles';
import {
  ContentWrapper,
  ContentContainer,
  Content,
  TryButtonWrapper,
} from '@styles/pages/index.styles';

interface HomeProps {
  endpoints: Array<{ endpoint: string, count: number }>
  url: string
}

const Home: NextPage<HomeProps> = ({ endpoints, url }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const handleRouteChange = async (path: string) => {
    await router.push(path);
  };

  const fetchData = async (path: string) => {
    window.open(`${url}${path}`, '_blank');
  };

  return (
    <Default
      header={{
        docs: t('components:header.docs'),
        about: t('components:header.about')
      }}
    >
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

          <Title className={classNames({ contentTitle: true })}>{t('pages:index.introMenu.availableEndpoints')}</Title>

          <AvailableEndpoints
            availableEndpointsIntro={t('pages:index.introMenu.availableEndpoints')}
            availableEndpoints={t('pages:index.availableEndpoints')}
            relation={t('pages:index.relation')}
            quantity={t('pages:index.quantity')}
            endpoints={endpoints}
          />

          <Title className={classNames({ contentTitle: true })}>{t('pages:index.introMenu.examples')}</Title>

          <Content>
            <Text>{t('pages:index.examplesText')}</Text>
            <Text>{t('pages:index.examples.allRecords1')}<CodeSpan>/list</CodeSpan>{t('pages:index.examples.allRecords2')}</Text>
            <Code>
              <CodeLine>fetch(&apos;https://data.mockerdistibutor.org/todo/list&apos;)</CodeLine>
              <CodeLine>.then(response ={'>'} response.json())</CodeLine>
              <CodeLine>.then(json ={'>'} console.log(json))</CodeLine>
            </Code>
            <TryButtonWrapper>
              <Button
                text={'Try it now!'}
                onClick={() => fetchData('/todo/list')}
              />
            </TryButtonWrapper>
          </Content>

          <Content>
            <Text>{t('pages:index.examples.specificRecord1')}<CodeSpan>id</CodeSpan>{t('pages:index.examples.specificRecord2')}</Text>
            <Code>
              <CodeLine>fetch(&apos;https://data.mockerdistibutor.org/post/1&apos;)</CodeLine>
              <CodeLine>.then(response ={'>'} response.json())</CodeLine>
              <CodeLine>.then(json ={'>'} console.log(json))</CodeLine>
            </Code>
            <TryButtonWrapper>
              <Button
                text={'Try it now!'}
                onClick={() => fetchData('/post/1')}
              />
            </TryButtonWrapper>
          </Content>

          <Content>
            <Text>{t('pages:index.examples.pagination1')}<CodeSpan>count</CodeSpan>{t('pages:index.examples.pagination2')}<CodeSpan>take</CodeSpan> and <CodeSpan>skip</CodeSpan> params.</Text>
            <Code>
              <CodeLine>fetch(&apos;https://data.mockerdistibutor.org/post?skip=3&take=2&apos;)</CodeLine>
              <CodeLine>.then(response ={'>'} response.json())</CodeLine>
              <CodeLine>.then(json ={'>'} console.log(json))</CodeLine>
            </Code>
            <TryButtonWrapper>
              <Button
                text={'Try it now!'}
                onClick={() => fetchData('/post?skip=3&take=2')}
              />
            </TryButtonWrapper>
          </Content>

        </ContentContainer>
      </ContentWrapper>
    </Default>
  );
};

export const getStaticProps: GetStaticProps = async ({
 locale
}) => {
  const isProd = process.env.NODE_ENV === 'production';
  const url = isProd ? process.env.PRODUCTION_DATA_API_URL : process.env.LOCAL_DATA_API_URL;

  const availableEndpoints = ['post', 'user', 'todo'];

  const endpoints = await Promise.all(
    availableEndpoints.map(async (item) => {
      const res = await fetch(`${url}/${item}?count=true`);
      const data = await res.json();
      return { count: data.count, endpoint: item };
    })
  );

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['pages', 'components'])),
      endpoints,
      url
    }
  };
};

export default Home;
