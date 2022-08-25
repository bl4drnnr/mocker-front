import styled from 'styled-components';

export const WelcomeWrapper = styled.div`
  width: 100%;
  height: 700px;
  
  background-image: ${(props) => props.theme.colors.background};
  display: flex;
  
  align-items: center;
`;

export const WelcomeContainer = styled.div`
  width: 700px;
  height: 75%;
  
  text-align: center;

  margin: 50px auto 0 auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
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

export const QuickSearchInput = styled.div`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  background-color: rgba(30, 41, 59, .85);
  color: rgba(238, 238, 238, .85);
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
  @media screen and (max-width: 1000px) {
    
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.secondary};
  padding-bottom: 30px;
`;

export const ContentContainer = styled.div`
  width: 65%;
  margin: 0 auto;
  
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const IntroTitle = styled.p`
  padding-top: 50px;
  text-align: center;
  
  font-size: 20px;
  font-weight: 500;
  
  color: ${(props) => props.theme.colors.text};
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

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const TryButtonWrapper = styled.div`
  width: 130px;
  margin-top: 20px;
`;
