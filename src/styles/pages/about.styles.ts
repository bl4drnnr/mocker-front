import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  overflow: scroll;

  background: ${(props) => props.theme.colors.primary};
  display: flex;
`;

export const Container = styled.div`
  width: 60%;
  height: 300px;
  margin: 80px auto 0 auto;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 52px;
  margin-bottom: 35px;
  margin-top: 35px;

  color: ${(props) => props.theme.colors.text};

  @media screen and (max-width: 1000px) {
    font-size: 38px;
  }
`;
