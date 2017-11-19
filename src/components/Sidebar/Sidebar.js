import styled from 'styled-components';
import { fadeAnimation, collapsed } from '../StyleUtils/style-utils';
import { SIDEBAR_BACKGROUND, HEADER_HEIGHT } from '../StyleUtils/constants';
// ${props => fadeOutLeft(props.isOpen)}
// ${(props) => fadeAnimation(props.isOpen)}
// todo animation
const Sidebar = styled.div`
  position: fixed;
  height: calc(100vh - ${HEADER_HEIGHT});
  background-color: ${SIDEBAR_BACKGROUND};
  overflow-y: auto;
  flex: 0 0 230px;
  width: 230px;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  @keyframes fadeOutLeft {
      from {
        opacity: 1;
        margin-left: 0px;
      }
  
      to {
        opacity: 0;
        margin-left: -230px;
      }
    };
  @keyframes fadeInLeft {
      from {
        opacity: 0;
        margin-left: -230px;
      }
  
      to {
        opacity: 1;
        margin-left: 0px;
      }
    };
    ${(props) => collapsed(props.isOpen)}
`;

export default Sidebar;
