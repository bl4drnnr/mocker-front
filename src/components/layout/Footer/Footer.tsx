import React from 'react';

import { useRouter } from 'next/router';

import { Container, FooterLinks, InnerContainer, FooterLink } from '@components/layout/Footer/Footer.styles';


const Footer = () => {
  const router = useRouter();

  const handlerRedirect = async (path: string) => {
    await router.push(path);
  };

  return (
    <Container>
      <InnerContainer>
        <FooterLink onClick={() => handlerRedirect('/')}>Mocker © 2022 All right reserved.</FooterLink>
        <FooterLinks>
          <FooterLink onClick={() => handlerRedirect('/docs')}>Docs</FooterLink>
          <FooterLink onClick={() => handlerRedirect('/about')}>About</FooterLink>
        </FooterLinks>
      </InnerContainer>
    </Container>
  );
};

export default Footer;
