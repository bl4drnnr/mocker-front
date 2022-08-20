import type { NextPage } from 'next';
import { Container, Title, Welcome } from '@styles/pages/index.styles';
import Default from '@layouts/Default';
import classNames from 'classnames';
import {useRouter} from "next/router";
import Button from "@components/Button/Button";

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

          <Button
            text={'Let\'s get started'}
            onClick={() => handleRouteChange('/docs')}
          />
        </Welcome>

      </Container>
    </Default>
  );
};

export default Home;
