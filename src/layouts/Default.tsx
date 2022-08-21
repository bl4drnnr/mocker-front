import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import useDarkMode from '@hooks/useDarkMode.hook';
import darkTheme from '@styles/themes/Dark.theme';
import lightTheme from '@styles/themes/Light.theme';

const ChildrenContainer = styled.div`
  padding-top: 80px;
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Container = styled.div`
  padding-bottom: 50px;
`;

interface DefaultLayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Default = ({ children }: DefaultLayoutProps): React.ReactElement => {
  const [theme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Wrapper>
        <Container>

          <Header />
          <ChildrenContainer>
            {children}
          </ChildrenContainer>
          <Footer />

        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Default;
