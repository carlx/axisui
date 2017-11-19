import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import MenuExampleVertical from './MenuExampleVertical';
import AccordionExampleFluid from './AccordionExampleFluid';



class SidebarMenu extends React.Component {
  render() {
    return (
      <Sidebar isOpen={this.props.isOpen} id="sidebar">
        <AccordionExampleFluid />
      </Sidebar>
    );
  }
}

SidebarMenu.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default SidebarMenu;
