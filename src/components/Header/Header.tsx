import React from 'react';

import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import Button from '@components/Button/Button';
import { Buttons, Container, Logo } from '@components/Header/Header.styles';
import Input from '@components/Input/Input';

const Header = () => {
  const [test, sets] = React.useState('');
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

      <Input
        value={test}
        placeholder={'Search...'}
        onChange={(e) => sets(e.target.value)}
      />

      <Buttons>
        <Button
          text={'Docs'}
          onClick={() => handleRouteChange('/docs')}
        />
        <Button
          text={'About project'}
          onClick={() => handleRouteChange('/about')}
        />
      </Buttons>
    </Container>
  );
};

export default Header;
