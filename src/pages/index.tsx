import classNames from 'classnames';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Button from '@components/Button/Button';
import Default from '@layouts/Default';
import { Container, Title, Welcome, ButtonWrapper } from '@styles/pages/index.styles';

const Home: NextPage = () => {
  const router = useRouter();

  const handleRouteChange = async (path: string) => {
    await router.push(path);
  };

  return (
    <Default>
      <Container>

        <Welcome>
          <Title>MOCKER</Title>
          <Title
            className={classNames({ subtitle: true })}
          >Fake JSON REST API data distribution</Title>
          <Title
            className={classNames({ smallSubtitle: true })}
          >Prototype and test your API with Mocker</Title>

          <ButtonWrapper>
            <Button
              text={'Let\'s get started'}
              onClick={() => handleRouteChange('/docs')}
            />
          </ButtonWrapper>
        </Welcome>

      </Container>
    </Default>
  );
};

export default Home;
