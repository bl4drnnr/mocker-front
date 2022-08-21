import React from 'react';

import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { HeaderProps } from '@components/Header/Header.interface';
import { Buttons, Container, Logo } from '@components/Header/Header.styles';
import Button from '@components/UI/Button/Button';
import Input from '@components/UI/Input/Input';
import ThemeToggler from '@components/UI/ThemeToggler/ThemeToggler';
import { theme } from '@store/global/global.state';

const Header = ({ docs, about, search }: HeaderProps) => {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  const [searchQuery, setSearchQuery] = React.useState('');
  const router = useRouter();

  const handleRouteChange = async (path: string) => {
    await router.push(path);
  };

  const toggleTheme = () => {
    if (currentTheme === 'dark') setCurrentTheme('light');
    else setCurrentTheme('dark');
  };

  return (
    <Container>
      <Logo
        onClick={() => handleRouteChange('/')}
      >MOCKER
      </Logo>

      <Input
        value={searchQuery}
        placeholder={search}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

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
