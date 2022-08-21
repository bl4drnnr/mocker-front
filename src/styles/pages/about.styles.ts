import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  background: ${(props) => props.theme.colors.primary};
  display: flex;
`;

export const Container = styled.div`
  width: 60%;
  height: 300px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 52px;
  transition: .5s;
  margin-bottom: 35px;
  margin-top: 35px;

  color: ${(props) => props.theme.colors.text};
`;
