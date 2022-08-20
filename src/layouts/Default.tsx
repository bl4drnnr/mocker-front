import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '@components/Header/Header';
import useDarkMode from '@hooks/useDarkMode.hook';
import lightTheme from '@styles/themes/Light.theme';
import darkTheme from '@styles/themes/Dark.theme';

const ChildrenContainer = styled.div`
  padding-top: 80px;
`;

interface DefaultLayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Default = ({ children }: DefaultLayoutProps): React.ReactElement => {
  const [theme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Header />
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </ThemeProvider>
  );
};

export default Default;
