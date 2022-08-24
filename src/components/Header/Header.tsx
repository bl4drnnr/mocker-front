import React from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { HeaderProps } from '@components/Header/Header.interface';
import { Buttons, Container, HeaderLink, Logo } from '@components/Header/Header.styles';
import ThemeToggler from '@components/UI/ThemeToggler/ThemeToggler';
import { theme } from '@store/global/global.state';

const Header = ({ docs, about }: HeaderProps) => {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  const [background, setBackground] = React.useState(false);
  const router = useRouter();

  const handleRouteChange = async (path: string) => {
    await router.push(path);
  };

  const setTheme = (theme: 'dark' | 'light') => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  };

  const toggleTheme = () => {
    if (currentTheme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  React.useEffect(() => {
    const theme = localStorage.getItem('theme') as 'dark' | 'light';
    if (['dark', 'light'].includes(theme)) setTheme(theme);
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setBackground(window.scrollY > 620);
    });
  }, []);

  return (
    <Container
      className={classNames({ background })}
    >
      <Logo
        onClick={() => handleRouteChange('/')}
      >MOCKER
      </Logo>

      <Buttons>
        <HeaderLink
          onClick={() => handleRouteChange('/docs')}
        >
          {docs}
        </HeaderLink>
        <HeaderLink
          className={classNames({ last: true })}
          onClick={() => handleRouteChange('/about')}
        >
          {about}
        </HeaderLink>
        <ThemeToggler
          theme={currentTheme}
          onClick={() => toggleTheme()}
        />
      </Buttons>
    </Container>
  );
};

export default Header;
