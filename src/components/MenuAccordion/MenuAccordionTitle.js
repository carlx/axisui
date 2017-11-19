import { Accordion } from 'semantic-ui-react';
import styled from 'styled-components';

const MenuAccordionTitle = styled(Accordion.Title)`
  &:hover {
    background-color: #00000008 !important;
  }
`;

export default MenuAccordionTitle;