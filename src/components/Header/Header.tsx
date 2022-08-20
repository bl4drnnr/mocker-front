import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Logo } from '@components/Header/Header.styles';

const Header = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Logo>Mocker</Logo>
    </Container>
  );
};

export default Header;
