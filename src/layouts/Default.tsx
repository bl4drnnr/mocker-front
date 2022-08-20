import React from 'react';
import styled from 'styled-components';
import Header from '@components/Header/Header';

const ChildrenContainer = styled.div`
  padding-top: 80px;
`;

interface DefaultLayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Default = ({ children }: DefaultLayoutProps): React.ReactElement => {
  return (
    <>
      <Header />
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </>
  );
};

export default Default;
