import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'

export default class MenuExampleVertical extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderMenuItems = () => {

  }

  render() {
    const { activeItem } = this.state
    const items = [...Array(4).keys()];
    return (
      <Menu vertical fluid className="app-menu">
        {
          (items.map((item, index) => <Menu.Item name="inbox" key={index} className="menu-item">
            <Label color='teal'>1</Label>
            Inbox
          </Menu.Item>))
        }

        <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
          <Label color='teal'>1</Label>
          Inbox
        </Menu.Item>

        <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
          <Label>51</Label>
          Spam
        </Menu.Item>

        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
          <Label>1</Label>
          Updates
        </Menu.Item>
      </Menu>
    )
  }
}