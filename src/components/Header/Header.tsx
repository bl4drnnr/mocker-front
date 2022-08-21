import React from 'react';

import { useRouter } from 'next/router';

import { HeaderProps } from '@components/Header/Header.interface';
import { Buttons, Container, Logo } from '@components/Header/Header.styles';
import Button from '@components/UI/Button/Button';
import Input from '@components/UI/Input/Input';

const Header = ({ docs, about, search }: HeaderProps) => {
  const [test, sets] = React.useState('');
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
        placeholder={search}
        onChange={(e) => sets(e.target.value)}
      />

      <Buttons>
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
