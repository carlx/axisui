import faker from 'faker';
import React from 'react';
import { Dropdown, Image, Item } from 'semantic-ui-react';
import { DESKTOP, MOBILE } from '../StyleUtils/style-utils';

const avatar = (props) => (
  <span>
    <Image avatar width="35" height="35" src="https://s3.amazonaws.com/uifaces/faces/twitter/bermonpainter/128.jpg" />
    {(props.media !== MOBILE.name) ? 'Karol Wawrzecki' : ''}
  </span>
)

const options = [
  { key: 'user', text: 'Account', icon: 'user' },
  { key: 'settings', text: 'Settings', icon: 'settings' },
  { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
];

const DropdownImageTriggerExample = (props) => (
  <Item><Dropdown trigger={avatar(props)} options={options} pointing="top right" icon={null} /></Item>
);

export default DropdownImageTriggerExample;
