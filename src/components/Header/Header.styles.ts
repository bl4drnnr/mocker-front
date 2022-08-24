import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 98;
  
  &.background {
    background: ${(props) => props.theme.colors.primary};
  }

  @media screen and (max-width: 1000px) {
    background: ${(props) => props.theme.colors.primary};
  }
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 32px;
  
  margin: 0 20px;
  
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  @media screen and (max-width: 1000px) {
    justify-content: end;
    width: 100%;
  }
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
  
  &.home {
    display: none;
    @media screen and (max-width: 1000px) {
      display: block;
    }
  }

  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;
