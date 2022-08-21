import classNames from 'classnames';
import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import Button from '@components/UI/Button/Button';
import Default from '@layouts/Default';
import {
  WelcomeWrapper,
  Title,
  Welcome,
  ButtonWrapper,
  ContentWrapper,
  IntroContent,
  Intro,
  Text,
  Link,
  Content,
  Table,
  LinkTd
} from '@styles/pages/index.styles';

interface HomeProps {
  postsCount: number;
  usersCount: number;
  todosCount: number
}

const Home: NextPage<HomeProps> = ({ postsCount, todosCount, usersCount }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRouteChange = async (path: string) => {
    await router.push(path);
  };

  return (
    <Default
      header={{
        docs: t('components:header.docs'),
        search: t('components:header.about'),
        about: t('components:header.search')
    }}
    >
      <WelcomeWrapper>
        <Welcome>
          <Title>MOCKER</Title>
          <Title
            className={classNames({ subtitle: true })}
          >{t('pages:index.title')}</Title>
          <Title
            className={classNames({ smallSubtitle: true })}
          >{t('pages:index.subtitle')}</Title>

          <ButtonWrapper>
            <Button
              text={t('pages:index.startButton')}
              onClick={() => handleRouteChange('/docs')}
            />
          </ButtonWrapper>
        </Welcome>
      </WelcomeWrapper>

      <ContentWrapper>

        <IntroContent>

          <Title className={classNames({ contentTitle: true })}>
            {t('pages:index.introMenu.intro')}
          </Title>
          <Intro><strong>Mocker - &nbsp;</strong>{t('pages:index.intro')}</Intro>
          <Content>
            <Text>{t('pages:index.linkTo')} -&nbsp;
              <Link>https://data.mockerdistibutor.org</Link>
            </Text>
            <Text>{t('pages:index.endpointsDescription1')}</Text>
            <Text>
              {t('pages:index.endpointsDescription2')}&nbsp;<Link>{t('pages:index.docs')}.</Link>
            </Text>
          </Content>

          <Title className={classNames({ contentTitle: true })}>{t('pages:index.introMenu.availableEndpoints')}</Title>
          <Content>
            <Text>{t('pages:index.availableEndpoints')}:</Text>

            <Table>
              <thead>
              <tr>
                <th>Endpoint</th>
                <th>{t('pages:index.quantity')}</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <LinkTd>/user</LinkTd>
                <td>{usersCount}</td>
              </tr>
              <tr>
                <LinkTd>/post</LinkTd>
                <td>{postsCount}</td>
              </tr>
              <tr>
                <LinkTd>/todo</LinkTd>
                <td>{todosCount}</td>
              </tr>
              </tbody>
            </Table>

            <Text>{t('pages:index.relation')}</Text>
          </Content>

          <Title className={classNames({ contentTitle: true })}>{t('pages:index.introMenu.examples')}</Title>
          <Content>
            <Text>{t('pages:index.examplesText')}</Text>
          </Content>

        </IntroContent>

      </ContentWrapper>
    </Default>
  );
};

export const getStaticProps: GetStaticProps = async ({
 locale
}) => {
  const postRes = await fetch(`${process.env.DATA_API_URL}/post?count=true`);
  const postsCount = await postRes.json();

  const usersRes = await fetch(`${process.env.DATA_API_URL}/user?count=true`);
  const usersCount = await usersRes.json();

  const todosRes = await fetch(`${process.env.DATA_API_URL}/todo?count=true`);
  const todosCount = await todosRes.json();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['pages', 'components'])),
      postsCount: postsCount.count,
      usersCount: usersCount.count,
      todosCount: todosCount.count
    }
  };
};

export default Home;
