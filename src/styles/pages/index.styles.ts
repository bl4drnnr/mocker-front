import styled from 'styled-components';

export const WelcomeWrapper = styled.div`
  width: 100%;
  height: 600px;
  
  background: ${(props) => props.theme.colors.primary};
  
  display: flex;
  
  align-items: center;
`;

export const Welcome = styled.div`
  width: 65%;
  height: 75%;
  
  text-align: center;

  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 64px;
  transition: .5s;
  margin-bottom: 35px;

  color: ${(props) => props.theme.colors.text};
  
  &.subtitle {
    font-size: 36px;
    font-weight: 500;
  }
  &.smallSubtitle {
    font-size: 32px;
    font-weight: 100;
  }
  &.contentTitle {
    font-size: 32px;
    margin: 0;
    padding-top: 50px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.secondary};
`;

export const IntroContent = styled.div`
  width: 65%;
  margin: 0 auto;
`;

export const Intro = styled.p`
  padding-top: 50px;
  text-align: center;
  
  font-size: 20px;
  font-weight: 500;
  
  color: ${(props) => props.theme.colors.text};
`;

export const Text = styled.p`
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 300;
  
  color: ${(props) => props.theme.colors.text};
`;

export const Link = styled.span`
  display: inline-flex;
  color: ${(props) => props.theme.colors.link};
  cursor: pointer;

  &.endpoint {
    font-size: 28px;
    font-weight: 100;
    display: block;
    padding: 10px 0;
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

export const LinkTd = styled.td`
  font-size: 28px;
  font-weight: 100;

  color: ${(props) => props.theme.colors.link} !important;

  padding: 10px 0;
  
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const LinkP = styled.p`
  font-size: 28px;
  font-weight: 100;
  
  color: ${(props) => props.theme.colors.link};
  
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 50px 50px 0 50px;
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 500px;
  text-align: center;
  
  th, td {
    color: ${(props) => props.theme.colors.text};
  }
  
  td {
    font-size: 24px;
  }
`;
