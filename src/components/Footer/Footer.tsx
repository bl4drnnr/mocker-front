import React from 'react';

import { useRouter } from 'next/router';

import { Container, FooterLinks, InnerContainer, Text } from '@components/Footer/Footer.styles';

const Footer = () => {
  const router = useRouter();

  const handlerRedirect = async (path: string) => {
    await router.push(path);
  };

  return (
    <Container>
      <InnerContainer>
        <Text
          onClick={() => handlerRedirect('/')}
        >Mocker © 2022 All right reserved.</Text>
        <FooterLinks>
          <Text
            onClick={() => handlerRedirect('/docs')}
          >Docs</Text>
          <Text
            onClick={() => handlerRedirect('/about')}
          >About</Text>
        </FooterLinks>
      </InnerContainer>
    </Container>
  );
};

export default Footer;
