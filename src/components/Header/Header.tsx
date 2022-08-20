import React from 'react';

import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import Button from '@components/Button/Button';
import { Container, Logo } from '@components/Header/Header.styles';

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRouteChange = async (path: string) => {
    await router.push(path);
  };

  return (
    <Container>
      <Logo
        onClick={() => handleRouteChange('/')}
      >MOCKER
      </Logo>
      <Button
        text={'Docs'}
        onClick={() => handleRouteChange('/docs')}
      />
      <Button
        text={'About project'}
        onClick={() => handleRouteChange('/about')}
      />
    </Container>
  );
};

export default Header;
