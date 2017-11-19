import styled from 'styled-components';
import { HEADER_BACKGROUND, HEADER_HEIGHT } from '../StyleUtils/constants';

const Header = styled.div`
  position: fixed;
  display: flex;
  width: calc(100vw);
  z-index: 1020;
  background-color: ${HEADER_BACKGROUND};
  flex: 0 0 auto;
  height: ${HEADER_HEIGHT};
  justify-content: flex-start; 
  flex-direction: row;
  align-items: stretch; 
  align-content: stretch;
`;

export default Header;