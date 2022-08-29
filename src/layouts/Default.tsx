import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import Footer from '@components/layout/Footer/Footer';
import { FooterProps } from '@components/layout/Footer/Footer.interface';
import Header from '@components/layout/Header/Header';
import { HeaderProps } from '@components/layout/Header/Header.interface';
import useDarkMode from '@hooks/useDarkMode.hook';
import darkTheme from '@styles/themes/Dark.theme';
import lightTheme from '@styles/themes/Light.theme';

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Container = styled.div`
  padding-bottom: 50px;
`;

interface DefaultLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  header: HeaderProps;
  footer: FooterProps
}

const Default = ({ children, header, footer }: DefaultLayoutProps): React.ReactElement => {
  const [theme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Wrapper>
        <Container>

          <Header
            docs={header.docs}
            about={header.about}
            colorChangePx={header.colorChangePx}
            defaultLanguage={header.defaultLanguage}
          />
          {children}
          <Footer
            docs={footer.docs}
            about={footer.about}
            rights={footer.rights}
          />

        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Default;
