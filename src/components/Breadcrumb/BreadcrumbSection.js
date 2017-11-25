import styled from 'styled-components';
import { Breadcrumb } from 'semantic-ui-react';
import { BREADCRUMB_FONT_COLOR } from '../StyleUtils/constants';

const BreadcrumbSection = styled(Breadcrumb.Section)`
  color: ${BREADCRUMB_FONT_COLOR} !important;
`

export default BreadcrumbSection;