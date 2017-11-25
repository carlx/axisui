import styled from 'styled-components';
import { Breadcrumb } from 'semantic-ui-react';
import { BREADCRUMB_FONT_COLOR } from '../StyleUtils/constants';

const BreadcrumbDevider = styled(Breadcrumb.Divider)`
  color: ${BREADCRUMB_FONT_COLOR} !important;
`

export default BreadcrumbDevider;