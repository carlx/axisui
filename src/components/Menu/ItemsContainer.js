import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { MenuAccordion, MenuAccordionTitle, MenuAccordionContent, TitleWrapper, Title, TitleIcon, TitleDropDownIcon } from '../MenuAccordion';


const ItemsContainer = (props) => (
  <MenuAccordion styled>
    <MenuAccordionTitle
      index={props.index}
      active={props.activeIndex === props.index}
      onClick={props.handleClick}
    >
      <TitleWrapper>
        <TitleIcon>
          {props.icon && <Icon name={props.icon} />}
        </TitleIcon>
        <Title>
          {props.title}
        </Title>
        <TitleDropDownIcon>
          <Icon name="dropdown" />
        </TitleDropDownIcon>
      </TitleWrapper>
    </MenuAccordionTitle>
    <MenuAccordionContent active={props.activeIndex === props.index}>
      {props.children}
    </MenuAccordionContent>
  </MenuAccordion>
);

ItemsContainer.PropTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default ItemsContainer;
