import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 160px;
  padding-left: 300px;
  overflow: scroll;
  background: ${(props) => props.theme.colors.primary};
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
`;
