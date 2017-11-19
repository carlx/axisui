import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Menu from '../Menu/Menu';

const SidebarMenu = (props) => (
  <Sidebar isOpen={props.isOpen} id="sidebar">
    <Menu />
  </Sidebar>
);

SidebarMenu.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default SidebarMenu;
