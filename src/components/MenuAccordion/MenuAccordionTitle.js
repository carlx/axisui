import { Accordion } from 'semantic-ui-react';
import styled from 'styled-components';
import { MENU_PRIMARY_FONT_COLOR, SIDEBAR_BACKGROUND, MENU_GROUP_HOVER_BACKGROUND, MENU_GROUP_HOVER_COLOR } from '../StyleUtils/constants';

const MenuAccordionTitle = styled(Accordion.Title)`
  color: ${(props) => (props.active) ? MENU_GROUP_HOVER_COLOR : MENU_PRIMARY_FONT_COLOR} !important;
  background-color: ${(props) => (props.active) ? MENU_GROUP_HOVER_BACKGROUND : SIDEBAR_BACKGROUND} !important;
  &:hover {
    color: ${MENU_GROUP_HOVER_COLOR} !important;
    background-color: ${MENU_GROUP_HOVER_BACKGROUND} !important;
  }
`;

export default MenuAccordionTitle;