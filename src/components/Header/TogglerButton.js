import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react';
import Toggler from './Toggler';
import { HEADER_FONT_COLOR } from '../StyleUtils/constants';

const StyledButton = styled(Button)`
  color: ${HEADER_FONT_COLOR} !important;
  font-weight: bold !important;
  background-color: transparent !important;
`;

const TogglerButton = (props) => (
  <Toggler media={props.media}>
    <StyledButton
      icon
      onClick={props.toggle}
      size="large"
    >
      <Icon name="content" />
    </StyledButton>
  </Toggler>
)

export default TogglerButton;