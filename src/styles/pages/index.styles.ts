import styled from 'styled-components';

export const Container = styled.div`
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

  color: ${(props) => props.theme.colors.text};
  &.test {
    font-size: 58px;
  }
`;
