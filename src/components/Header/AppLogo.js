import React from 'react';
import Logo from './Logo';
import { Image, Item } from 'semantic-ui-react';

class AppLogo extends React.Component {
  render() {
    return (
      <Logo media={this.props.media}>
        <Item>
          <Image
            avatar verticalAlign="middle" spaced="right" height="25" width="25" size="mini"
            src="https://cdn.worldvectorlogo.com/logos/react.svg"
          />
          <strong>ELECTRON UI</strong>
        </Item>
      </Logo>
    );
  }
}

export default AppLogo;
