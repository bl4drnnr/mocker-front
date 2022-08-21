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
  EndpointsContent,
  Table,
  LinkTd
} from '@styles/pages/index.styles';


const Home: NextPage = () => {
  const { t } = useTranslation('pages');
  const router = useRouter();

  const handleRouteChange = async (path: string) => {
    await router.push(path);
  };

  return (
    <Default>

      <WelcomeWrapper>
        <Welcome>
          <Title>MOCKER</Title>
          <Title
            className={classNames({ subtitle: true })}
          >{t('index.title')}</Title>
          <Title
            className={classNames({ smallSubtitle: true })}
          >{t('index.subtitle')}</Title>

          <ButtonWrapper>
            <Button
              text={t('index.startButton')}
              onClick={() => handleRouteChange('/docs')}
            />
          </ButtonWrapper>
        </Welcome>
      </WelcomeWrapper>

      <ContentWrapper>

        <IntroContent>
          <Intro><strong>Mocker - &nbsp;</strong>{t('index.intro')}</Intro>

          <Text>{t('index.linkTo')} -&nbsp;
            <Link>https://data.mockerdistibutor.org</Link>
          </Text>
          <Text>{t('index.endpointsDescription1')}</Text>
          <Text>
            {t('index.endpointsDescription2')}&nbsp;<Link>{t('index.docs')}</Link>
          </Text>

          <EndpointsContent>
            <Text>{t('index.availableEndpoints')}:</Text>

            <Table>
              <thead>
              <tr>
                <th>Endpoint</th>
                <th>{t('index.quantity')}</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <LinkTd>/post</LinkTd>
                <td>20</td>
              </tr>
              <tr>
                <LinkTd>/user</LinkTd>
                <td>10</td>
              </tr>
              <tr>
                <LinkTd>/todo</LinkTd>
                <td>15</td>
              </tr>
              </tbody>
            </Table>

            <Text>{t('index.relation')}</Text>
          </EndpointsContent>
        </IntroContent>

      </ContentWrapper>
    </Default>
  );
};

export const getStaticProps: GetStaticProps = async ({
 locale
}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['pages'])),
  },
});

export default Home;
