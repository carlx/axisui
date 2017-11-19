import { Item } from 'semantic-ui-react';
import styled from 'styled-components';
import { PRIMARY_FONT_COLOR } from '../StyleUtils/constants';

const MenuItem = styled(Item)`
  color: ${PRIMARY_FONT_COLOR};
  padding: .75em 1em !important;
  border-bottom: 'none' !important;
  &:hover {
    background-color: #00000008 !important;
  }
`;

export default MenuItem;