import styled from 'styled-components';

export const Link = styled.span`
  color: ${(props) => props.theme.colors.link};
  cursor: pointer;
  font-weight: 500;

  &.tableLink {
    font-size: 28px;
    color: ${(props) => props.theme.colors.link} !important;
    padding: 10px 0;
  }
  
  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1000px) {
    overflow-wrap: break-word;
  }
`;

export const LinkTd = styled.td`
  font-size: 28px;
  font-weight: 500;
  
  color: ${(props) => props.theme.colors.link} !important;
  
  padding: 5px 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;


export const Code = styled.div`
  width: 650px;
  padding: 12px;
  border-radius: 12px;
  
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const CodeLine = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-family: 'Roboto Mono', sans-serif;
  
  @media screen and (max-width: 1000px) {
    overflow-wrap: break-word;
  }
`;

export const CodeSpan = styled.span`
  padding: 0 5px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.primary};
  font-family: 'Roboto Mono', sans-serif;
`;

export const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 35px;
  font-weight: 900;

  color: ${(props) => props.theme.colors.text};
  
  &.subtitle {
    font-size: 3.75rem;
    font-weight: 900;
    @media screen and (max-width: 1000px) {
      font-size: 2.5rem;
    }
  }
  &.contentTitle {
    font-size: 32px;
    margin: 0;
    padding-top: 50px;
    @media screen and (max-width: 1000px) {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 1000px) {
    font-size: 48px;
  }
`;

export const CommonTitle = styled.h1`
  font-size: 52px;
  margin-bottom: 35px;
  margin-top: 35px;

  color: ${(props) => props.theme.colors.text};

  @media screen and (max-width: 1000px) {
    font-size: 38px;
  }
`;

export const Text = styled.p`
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 300;

  color: ${(props) => props.theme.colors.text};

  &.about {
    text-indent: 50px;
    font-size: 22px;
    @media screen and (max-width: 1000px) {
      text-indent: 20px;
      font-size: 16px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  overflow: scroll;
  background: ${(props) => props.theme.colors.primary};
  &.flex {
    display: flex;
  }
`;

export const Container = styled.div`
  width: 60%;
  height: 300px;
  margin: 80px auto 0 auto;
  background: wheat;
 
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;
