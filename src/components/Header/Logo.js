import styled from 'styled-components';
import { logoOrder, logoWidth } from '../StyleUtils/style-utils';
import { SIDEBAR_WIDTH, LOGO_FONT_COLOR, LOGO_BACKGROUND } from '../StyleUtils/constants';

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${LOGO_BACKGROUND};
  flex: 0 1 ${SIDEBAR_WIDTH};
  color: ${LOGO_FONT_COLOR};
  ${(props) => logoOrder(props.media)}
  ${(props) => logoWidth(props.media)}
`;

export default Logo;
