import styled from 'styled-components';
import { navWidth } from '../StyleUtils/style-utils';

const Nav = styled.div`
  display: flex;
  justify-content: flex-end; 
  flex-direction: row;
  padding: 0px 10px 0px 0px;
  order: 3;
  ${props => navWidth(props.media)}
`;

export default Nav;