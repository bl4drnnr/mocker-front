import type { NextPage } from 'next';
import { Container, Title, Welcome } from '@styles/pages/index.styles';
import Default from '@layouts/Default';

const Home: NextPage = () => {
  return (
    <Default>
      <Container>

        <Welcome>
          <Title>Mocker</Title>
        </Welcome>

      </Container>
    </Default>
  );
};

export default Home;
