import React from 'react';

import { useRouter } from 'next/router';

import { FooterProps } from '@components/layout/Footer/Footer.interface';
import { Container, FooterLinks, InnerContainer, FooterLink } from '@components/layout/Footer/Footer.styles';


const Footer = ({ rights, docs, about }: FooterProps) => {
  const router = useRouter();

  const handlerRedirect = async (path: string) => {
    await router.push(path);
  };

  return (
    <Container>
      <InnerContainer>
        <FooterLink onClick={() => handlerRedirect('/')}>Mocker © 2022 {rights}.</FooterLink>
        <FooterLinks>
          <FooterLink onClick={() => handlerRedirect('/docs')}>{docs}</FooterLink>
          <FooterLink onClick={() => handlerRedirect('/about')}>{about}</FooterLink>
        </FooterLinks>
      </InnerContainer>
    </Container>
  );
};

export default Footer;
