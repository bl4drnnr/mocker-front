import { useState } from 'react';

import classNames from 'classnames';
import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@components/UI/Button/Button';
import Modal from '@components/UI/Modal/Modal';
import Default from '@layouts/Default';
import Search from '@public/img/search.svg';
import {
  Link,
  CodeSpan,
  Code,
  CodeLine,
  Title,
  Text
} from '@styles/common/common.styles';
import {
  WelcomeWrapper,
  Welcome,
  ButtonWrapper,
  ContentWrapper,
  IntroContent,
  Intro,
  Content,
  Table,
  InputSearchBox,
  SearchIcon,
  TryButtonWrapper,
  QuickSearchInput,
  ButtonContainer
} from '@styles/pages/index.styles';

interface HomeProps {
  postsCount: number;
  usersCount: number;
  todosCount: number;
  url: string;
}

const Home: NextPage<HomeProps> = ({ postsCount, todosCount, usersCount, url }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
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
      <WelcomeWrapper>
        <Welcome>
          <Title>MOCKER</Title>
          <Title className={classNames({ subtitle: true })}>{t('pages:index.title')}</Title>

          <ButtonWrapper>
            <ButtonContainer>
              <Button
                text={t('pages:index.startButton')}
                onClick={() => handleRouteChange('/docs')}
              />
              <InputSearchBox>
                <SearchIcon>
                  <Image src={Search} width={20} height={20} alt={'Search'} />
                </SearchIcon>
                <QuickSearchInput
                  onClick={() => setShowModal(true)}
                >
                  {t('components:header.search')}
                </QuickSearchInput>
                {showModal ? (<Modal onClose={() => setShowModal(false)}/>) : null}
              </InputSearchBox>
            </ButtonContainer>
          </ButtonWrapper>
        </Welcome>
      </WelcomeWrapper>

      <ContentWrapper>
        <IntroContent>
          <Title className={classNames({ contentTitle: true })}>
            {t('pages:index.introMenu.intro')}
          </Title>

          <Intro><strong>Mocker - </strong>{t('pages:index.intro')}</Intro>
          <Content>
            <Text>{t('pages:index.linkTo')} - <Link>https://data.mockerdistibutor.org</Link></Text>
            <Text>{t('pages:index.endpointsDescription1')}</Text>
            <Text>{t('pages:index.endpointsDescription2')} <Link>{t('pages:index.docs')}.</Link></Text>
          </Content>

          <Title className={classNames({ contentTitle: true })}>{t('pages:index.introMenu.availableEndpoints')}</Title>

          <Content>
            <Text>{t('pages:index.availableEndpoints')}</Text>
            <Text>{t('pages:index.relation')}</Text>

            <Table>
              <thead>
              <tr>
                <th>Endpoint</th>
                <th>{t('pages:index.quantity')}</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <Link className={classNames({ tableLink: true })}>/user</Link>
                <td>{usersCount}</td>
              </tr>
              <tr>
                <Link className={classNames({ tableLink: true })}>/post</Link>
                <td>{postsCount}</td>
              </tr>
              <tr>
                <Link className={classNames({ tableLink: true })}>/todo</Link>
                <td>{todosCount}</td>
              </tr>
              </tbody>
            </Table>
          </Content>

          <Title className={classNames({ contentTitle: true })}>{t('pages:index.introMenu.examples')}</Title>

          <Content>
            <Text>{t('pages:index.examplesText')}</Text>
            <Text>All records for one resource are available under <CodeSpan>/list</CodeSpan> resource route.</Text>
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
            <Text>If you want to get only one specific record, just specify <CodeSpan>id</CodeSpan> of the record for resource.</Text>
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
            <Text>Also, pagination with total quantity (<CodeSpan>count</CodeSpan> param - optional) of resource records is available with <CodeSpan>take</CodeSpan> and <CodeSpan>skip</CodeSpan> params.</Text>
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

        </IntroContent>

      </ContentWrapper>
    </Default>
  );
};

export const getStaticProps: GetStaticProps = async ({
 locale
}) => {
  const isProd = process.env.NODE_ENV === 'production';
  const url = isProd ? process.env.PRODUCTION_DATA_API_URL : process.env.LOCAL_DATA_API_URL;

  const postRes = await fetch(`${url}/post?count=true`);
  const postsCount = await postRes.json();

  const usersRes = await fetch(`${url}/user?count=true`);
  const usersCount = await usersRes.json();

  const todosRes = await fetch(`${url}/todo?count=true`);
  const todosCount = await todosRes.json();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['pages', 'components'])),
      postsCount: postsCount.count,
      usersCount: usersCount.count,
      todosCount: todosCount.count,
      url
    }
  };
};

export default Home;
