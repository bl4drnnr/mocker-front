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
  height: 500px;
  
  border-radius: 16px;
  padding: 24px;
  
  background: ${(props) => props.theme.colors.primary};
`;
