import { Item } from 'semantic-ui-react';
import styled from 'styled-components';

const MenuItem = styled(Item)`
  padding: .75em 1em !important;
  border-bottom: ${props => (props.hasBorderBottom) ? 'border-bottom: 1px solid !important' : 'none'};
  &:hover {
    background-color: #00000008 !important;
  }
`;

export default MenuItem;