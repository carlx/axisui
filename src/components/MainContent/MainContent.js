import styled from 'styled-components';
import { media, mainContent, fadeAnimationMainContent } from '../StyleUtils/style-utils';

const setShrink = (isOpen) => {
  return (isOpen)
    ? 'flex: 1 0 auto;'
    : 'flex: 1 1 auto;';
}

// for mobile set shrink
const MainContent = styled.div`
  background-color: transparent;
  flex: 1 1 auto;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  @keyframes fadeOutLeftMainContent {
      from {
        margin-left: 230px;
      }
  
      to {
        margin-left: 0px;
      }
    };
  @keyframes fadeInLeftMainContent {
      from {
        margin-left: 0px;
      }
  
      to {
        margin-left: 230px;
      }
    };
  ${media.mobile`${props => setShrink(props.isOpen)}`}
  ${props => mainContent(props.isOpen)}
`;

export default MainContent;