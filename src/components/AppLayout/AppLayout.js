import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper/Wrapper';
import AppHeader from '../Header/AppHeader';
import BodyWrapper from '../BodyWrapper/BodyWrapper';
import SidebarMenu from '../Sidebar/SidebarMenu';
import MainContent from '../MainContent/MainContent';
import ContainerFluid from '../ContainerFluid/ContainerFluid';
import AppBreadcrumb from '../Breadcrumb/AppBreadcrumb';
import { MOBILE, DESKTOP } from '../StyleUtils/style-utils';
import { withRouter } from 'react-router-dom'


class AppLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSidebarOpen: true, media: DESKTOP.name };
  }

  componentDidMount() {
    this.setEventListener();
    this.setInitialMediaSize();
  }

  componentWillUnmount() {
    this.unsetEventListener();
  }

  onWindowResize = (evt) => {
    const calculatedMedia = this.setMedia(evt);
    if (this.state.isSidebarOpen && this.state.media !== MOBILE.name && calculatedMedia === MOBILE.name) {
      this.setState({ isSidebarOpen: !this.state.isSidebarOpen, media: MOBILE.name });
    } else if (this.state.media !== calculatedMedia) {
      this.setState({ media: calculatedMedia });
    }
  };

  setEventListener = () => {
    this.getWindowVisualViewport().addEventListener('resize', this.onWindowResize);
  };

  getWindowVisualViewport = () => (window && Object.prototype.hasOwnProperty.call(window, 'visualViewport'))
    ? window.visualViewport : window;

  // after registered eventListener call resize event to set initial media
  setInitialMediaSize = () => {
    this.getWindowVisualViewport().dispatchEvent(new Event('resize'));
  };

  setMedia = (evt) => {
    const width = (evt.target.constructor.name === 'VisualViewport') ? evt.target.width : evt.target.innerWidth;
    return (width < MOBILE.maxWidth) ? MOBILE.name : DESKTOP.name;
  }

  unsetEventListener = () => {
    this.getWindowVisualViewport().removeEventListener('resize', this.onWindowResize);
  };

  toggleSidebar = () => this.setState({ isSidebarOpen: !this.state.isSidebarOpen });

  render() {
    console.log(this.props);
    console.log('render app layout');
    return (
      <Wrapper>
        <AppHeader
          toggle={this.toggleSidebar}
          isOpen={this.state.isSidebarOpen}
          media={this.state.media}
        >
        </AppHeader>
        <BodyWrapper>
          <SidebarMenu isOpen={this.state.isSidebarOpen} />
          <MainContent isOpen={this.state.isSidebarOpen}>
            <AppBreadcrumb routes={this.props.routes} location={this.props.location} />
            <ContainerFluid fluid>
              {this.props.children}
            </ContainerFluid>
          </MainContent>
        </BodyWrapper>
      </Wrapper>
    );
  }
}

AppLayout.PropTypes = {
  children: PropTypes.node,
};

export default withRouter(AppLayout);
