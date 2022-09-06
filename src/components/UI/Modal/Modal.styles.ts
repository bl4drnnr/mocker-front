import styled from 'styled-components';

export const ModalWrapper = styled.div`
  overflow: hidden;
  position: fixed;
  z-index: 99;
  
  height: 100vh;
  width: 100vw;
  
  top: 0;
  left: 0;
  
  background: rgba(${(props) => props.theme.colors.primary},0.5);
  backdrop-filter: blur(8px);
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 800px;
  
  border-radius: 16px;
  padding: 24px;
  
  background: ${(props) => props.theme.colors.primary};
`;

export const SearchContainer = styled.div`
  margin-top: 25px;
`;

export const SearchItem = styled.div`
  background-color: rgba(30, 41, 59, .85);
  color: rgba(238, 238, 238, .85);

  margin: 10px 0;
  padding: 10px;
  
  border-radius: 6px;
  cursor: pointer;
  
  transition: .5s;
  
  &:hover {
    background: rgba(30, 41, 59, .25);
  }
`;
