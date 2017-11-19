const MENU = {
  items: [
    {
      name: 'Group 1',
      url: '/users',
      icon: 'user',
      roles: ['ROLE_ADMIN'],
      check: true,
      children: [
        {
          name: 'Group Item 1',
          class: '',
          roles: ['ROLE_ADMIN', 'ROLE_CC'],
          check: true,
        },
        {
          name: 'Group Item 2',
          url: '/expactocc',
          icon: 'user',
          roles: ['ROLE_ADMIN', 'ROLE_CC'],
          check: true,
        },
      ],
    },
    {
      name: 'First Level Item',
      url: '/partner/contacts/add',
      icon: 'user',
      roles: ['ROLE_ADMIN', 'ROLE_PARTNER'],
      check: true,
    },
    {
      name: 'First Level Item',
      url: '/partner/contacts/list',
      icon: 'user',
      roles: ['ROLE_ADMIN', 'ROLE_PARTNER'],
      check: true,
    },
    {
      name: 'Group 2',
      url: '/users',
      icon: 'user',
      roles: ['ROLE_ADMIN'],
      check: true,
      children: [
        {
          name: 'Group 2 Item',
          class: '',
          roles: ['ROLE_ADMIN', 'ROLE_CC'],
          check: true,
        },
        {
          name: 'Group 2 Item',
          url: '/expactocc',
          icon: 'user',
          roles: ['ROLE_ADMIN', 'ROLE_CC'],
          check: true,
        },
      ],
    },
    {
      name: 'First Level Item',
      url: '/surveys/list',
      icon: 'user',
      roles: ['ROLE_ADMIN', 'ROLE_PARTNER'],
      check: true,
    },
  ],
};

export default MENU;
