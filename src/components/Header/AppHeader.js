import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import AppLogo from './AppLogo';
import Nav from './Nav';
import NavItem from './NavItem';
import DropdownImageTriggerExample from './DropdownImageTriggerExample';
import TogglerButton from './TogglerButton';
import { DESKTOP, MOBILE } from '../StyleUtils/style-utils';

class AppHeader extends React.Component {
  render() {
    return (
      <Header>
        <AppLogo media={this.props.media} />
        <TogglerButton media={this.props.media} toggle={this.props.toggle}>
        </TogglerButton>
        <Nav media={this.props.media}>
          <NavItem>
            <DropdownImageTriggerExample media={this.props.media}></DropdownImageTriggerExample>
          </NavItem>
        </Nav>
      </Header>
    );
  }
}

AppHeader.PropTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  media: PropTypes.oneOf([MOBILE.name, DESKTOP.name]).isRequired,
};

export default AppHeader;
