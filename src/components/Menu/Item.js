import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { TitleWrapper, Title, TitleIcon, MenuItem, MenuItemDescription } from '../MenuAccordion';

const Item = (props) => (
  <Link to={props.url || ''}>
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
  </Link>
);

Item.propTypes = {
  url: PropType.string,
  icon: PropType.string,
  title: PropType.string,
}

export default Item;
