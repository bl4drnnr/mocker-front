import React from 'react';

import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { HeaderProps } from '@components/Header/Header.interface';
import { Buttons, Container, Logo } from '@components/Header/Header.styles';
import Button from '@components/UI/Button/Button';
import ThemeToggler from '@components/UI/ThemeToggler/ThemeToggler';
import { theme } from '@store/global/global.state';

const Header = ({ docs, about, search }: HeaderProps) => {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
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

  return (
    <Container>
      <Logo
        onClick={() => handleRouteChange('/')}
      >MOCKER
      </Logo>

      <Buttons>
        <ThemeToggler
          theme={currentTheme}
          onClick={() => toggleTheme()}
        />
        <Button
          text={docs}
          onClick={() => handleRouteChange('/docs')}
        />
        <Button
          text={about}
          onClick={() => handleRouteChange('/about')}
        />
      </Buttons>
    </Container>
  );
};

export default Header;
