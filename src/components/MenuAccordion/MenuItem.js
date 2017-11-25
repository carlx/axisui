import { Item } from 'semantic-ui-react';
import styled from 'styled-components';
import { MENU_PRIMARY_FONT_COLOR, MENU_GROUP_HOVER_COLOR } from '../StyleUtils/constants';

const MenuItem = styled(Item)`
  color: ${MENU_PRIMARY_FONT_COLOR};
  padding: .75em 1em !important;
  border-bottom: 'none' !important;
  &:hover {
    color: ${MENU_GROUP_HOVER_COLOR} !important;
  }
`;

export default MenuItem;