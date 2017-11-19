import React from 'react';
import { Icon } from 'semantic-ui-react';
import { TitleWrapper, Title, TitleIcon, MenuItem, MenuItemDescription } from '../MenuAccordion';

const Item = (props) => (
  <a href="#">
    <MenuItem>
      <MenuItemDescription>
        <TitleWrapper>
          <TitleIcon>
            <Icon name={props.icon} />
          </TitleIcon>
          <Title>
            {props.title}
          </Title>
        </TitleWrapper>
      </MenuItemDescription>
    </MenuItem>
  </a>
);

export default Item;
