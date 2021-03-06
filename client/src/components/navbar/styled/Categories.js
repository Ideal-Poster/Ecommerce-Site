import styled from 'styled-components';

export const TriDropdown = styled.div`
  height: 250px;
  position: fixed;
  display: flex;
  opacity: 0;
  background: orange;
  box-shadow: 0px 0px 8px;
  font-size: 18px;
`;

 export const TriSection = styled.div`
  position: relative;
  border-right: 1px solid #565656;
  height: 100%;
  width: 33.333vw;
  background: orange;
  overflow: hidden;
  z-index: 10000;
`;