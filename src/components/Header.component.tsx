import React from 'react';
import { useTranslation } from "next-i18next";
import { Container, Logo } from "@styles/components/Header.styles";

const HeaderComponent = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Logo>{t("components:header.logo")}</Logo>
    </Container>
  );
};

export default HeaderComponent;
