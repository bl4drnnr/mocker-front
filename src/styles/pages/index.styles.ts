import styled from 'styled-components';

export const WelcomeWrapper = styled.div`
  width: 100%;
  height: 80vh;
  
  background-image: ${(props) => props.theme.colors.background};
  display: flex;
  
  align-items: center;
`;

export const Welcome = styled.div`
  width: 700px;
  height: 75%;
  
  text-align: center;

  margin: 50px auto 0 auto;
`;

export const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 35px;
  font-weight: 900;

  color: ${(props) => props.theme.colors.text};
  
  &.subtitle {
    font-size: 3.75rem;
    font-weight: 900;
  }
  &.contentTitle {
    font-size: 32px;
    margin: 0;
    padding-top: 50px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 370px;
  margin: 0 auto;
  
  justify-content: space-between;
  
  display: flex;
`;

export const InputSearchBox = styled.div`
  position: relative;
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.secondary};
  padding-bottom: 30px;
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
  font-weight: 100;

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

export const Content = styled.div`
  width: 100%;
  padding: 50px 50px 0 50px;
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 400px;
  text-align: center;
  margin: 0 auto;
  
  th, td {
    color: ${(props) => props.theme.colors.text};
  }
  
  td {
    font-size: 24px;
  }
`;

export const Code = styled.div`
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.primary};
`;

export const CodeLine = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-family: 'Roboto Mono', sans-serif;
`;

export const CodeSpan = styled.span`
  padding: 3px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.primary};
  font-family: 'Roboto Mono', sans-serif;
`;
