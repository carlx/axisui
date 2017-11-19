import React from 'react';
import { TitleWrapper, Title, TitleIcon, MenuItem, MenuItemDescription } from '../MenuAccordion';
import { Icon } from 'semantic-ui-react';


class Item extends React.Component {

  render() {
    return(
      <a href="#">
      <MenuItem hasBorderBottom={this.props.hasBorderBottom}>
        <MenuItemDescription>
          <TitleWrapper>
            <TitleIcon>
              <Icon name={this.props.icon} />
            </TitleIcon>
            <Title>
              {this.props.title}
            </Title>
          </TitleWrapper>
        </MenuItemDescription>
      </MenuItem>
      </a>
    );
  }

}

export default Item;
