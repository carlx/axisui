import React, { Component } from 'react';
import MENU from './navigation';
import Item from './Item';
import ItemsContainer from './ItemsContainer';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: -1 };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  }

  renderChildren = (children) => children.map(
    (item) => <Item title={item.name} key={item.id} icon={item.icon} />
  )

  render() {
    return (
      <section>
        {
          MENU.items.map((item, index) => {
            if (item.hasOwnProperty('children')) {
              return (<ItemsContainer
                title={item.name}
                key={item.id}
                index={index}
                icon={item.icon}
                activeIndex={this.state.activeIndex}
                handleClick={this.handleClick}
              >
                {this.renderChildren(item.children)}
              </ItemsContainer>);
            }
            return <Item title={item.name} icon={item.icon} key={item.id} />;
          })
        }
      </section>
    );
  }
}

export default Menu;
