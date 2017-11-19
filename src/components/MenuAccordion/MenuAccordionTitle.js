import { Accordion } from 'semantic-ui-react';
import styled from 'styled-components';
import { PRIMARY_FONT_COLOR } from '../StyleUtils/constants';

const MenuAccordionTitle = styled(Accordion.Title)`
  color: ${PRIMARY_FONT_COLOR} !important;
  &:hover {
    background-color: #00000008 !important;
  }
`;

export default MenuAccordionTitle;