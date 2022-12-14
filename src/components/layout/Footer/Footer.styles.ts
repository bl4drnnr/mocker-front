import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;

  background: ${(props) => props.theme.colors.primary};

  bottom: 0;
  position: absolute;
`;

export const InnerContainer = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const FooterLink = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
  opacity: .5;
  margin: 0 10px;
  cursor: pointer;
  
  &:hover {
    color: ${(props) => props.theme.colors.hover}
  }

  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
`;
