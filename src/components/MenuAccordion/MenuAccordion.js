import { Accordion } from 'semantic-ui-react';
import styled from 'styled-components';
import { SIDEBAR_BACKGROUND } from '../StyleUtils/constants';

const MenuAccordion = styled(Accordion)`
  box-shadow: none !important;
  border-bottom: none !important;
  background-color: ${SIDEBAR_BACKGROUND} !important;
`;

export default MenuAccordion;