import { Accordion } from 'semantic-ui-react';
import styled from 'styled-components';
import { MENU_GROUP_BACKGROUND } from '../StyleUtils/constants';

const MenuAccordionContent = styled(Accordion.Content)`
  padding: 0px 0px 0px 0px !important;
  background-color: ${MENU_GROUP_BACKGROUND};
`;

export default MenuAccordionContent;