import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.colors.secondary};
  position: fixed;

  display: flex;
  align-items: center;
  //justify-content: space-between;
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 32px;
  
  margin: 0 20px;
  
  cursor: pointer;
  transition: .5s;
`;
