import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { MenuAccordion, MenuAccordionTitle, MenuAccordionContent, TitleWrapper, Title, TitleIcon, TitleDropDownIcon } from '../MenuAccordion';


class ItemsContainer extends React.Component {
  render() {
    return (
      <MenuAccordion styled>
        <MenuAccordionTitle
          index={this.props.index}
          active={this.props.activeIndex === this.props.index}
          onClick={this.props.handleClick}
        >
          <TitleWrapper>
            <TitleIcon>
              {this.props.icon && <Icon name={this.props.icon} />}
            </TitleIcon>
            <Title>
              {this.props.title}
            </Title>
            <TitleDropDownIcon>
              <Icon name="dropdown" />
            </TitleDropDownIcon>
          </TitleWrapper>
        </MenuAccordionTitle>
        <MenuAccordionContent active={this.props.activeIndex === this.props.index}>
          {this.props.children}
        </MenuAccordionContent>
      </MenuAccordion>
    );
  }
}

ItemsContainer.PropTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default ItemsContainer;
