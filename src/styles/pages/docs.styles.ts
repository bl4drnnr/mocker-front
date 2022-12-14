import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  
  padding-top: 160px;
  padding-left: 300px;
  padding-right: 160px;
  
  overflow: scroll;
  background: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 1000px) {
    padding: 80px 15px;
  }
`;

export const Container = styled.div`
  width: 65%;
  margin: 0 auto;
`;

export const ContentSidebar = styled.div`
  width: 300px;
  height: 100%;
  
  position: fixed;
  margin-top: 160px;
  
  text-align: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SidebarLink = styled.p`
  font-size: 20px;
  font-weight: 100;
  
  width: 200px;
  height: 50px;

  margin: 0 auto;
  
  color: ${(props) => props.theme.colors.text};
  
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    height: 9px;
    width: 9px;
    border: 2px solid ${(props) => props.theme.colors.link};
    background: ${(props) => props.theme.colors.primary};
    right: 0;
    transition: .5s;
  }
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background: ${(props) => props.theme.colors.link};
    right: 6px;
  }
  &:first-child:before, &:last-child:before {
     content: '';
     position: absolute;
     height: 50%;
     width: 1px;
     background: ${(props) => props.theme.colors.link};
     right: 6px;
  }
  &:first-child:before {
    bottom: 0;
  }
  &:last-child:before {
    top: 0;
  }
  &:hover {
    &::after {
      background: ${(props) => props.theme.colors.link};
    }
  }
  &.active {
    &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      height: 9px;
      width: 9px;
      border: 2px solid ${(props) => props.theme.colors.link};
      background: ${(props) => props.theme.colors.link};
      right: 0;
      transition: .5s;
    }
  }
`;
