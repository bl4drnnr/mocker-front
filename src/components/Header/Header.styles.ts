import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 32px;
  
  margin: 0 20px;
  
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const HeaderLink = styled.p`
  margin: 0 20px;

  font-size: 16px;
  font-weight: 900;
  
  color: ${(props) => props.theme.colors.text};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }
  
  &.last {
    border-right: 1px solid ${(props) => props.theme.colors.text};
    padding-right: 30px;
  }
`;
