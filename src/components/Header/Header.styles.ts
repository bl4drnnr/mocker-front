import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: royalblue;
  position: fixed;

  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 42px;
  margin: 0 20px;
  cursor: pointer;
  transition: .5s;
  
  &:hover {
    color: wheat;
  }
`;
