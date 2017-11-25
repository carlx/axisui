import styled from 'styled-components';
import { togglerOrder } from '../StyleUtils/style-utils';

const Toggler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex: 0 1 30px;
  ${(props) => togglerOrder(props.media)}
`;

export default Toggler;
