const MENU = {
  items: [
    {
      id: 1,
      name: 'Group 1',
      url: '/home',
      icon: 'user',
      roles: ['ROLE_ADMIN'],
      check: true,
      children: [
        {
          id: 11,
          url: '/home',
          name: 'Group Item 1',
          class: '',
          roles: ['ROLE_ADMIN', 'ROLE_CC'],
          check: true,
        },
        {
          id: 12,
          name: 'Group Item 2',
          url: '/home',
          icon: 'user',
          roles: ['ROLE_ADMIN', 'ROLE_CC'],
          check: true,
        },
      ],
    },
    {
      id: 2,
      name: 'First Level Item',
      url: '/partner/contacts/add',
      icon: 'user',
      roles: ['ROLE_ADMIN', 'ROLE_PARTNER'],
      check: true,
    },
    {
      id: 3,
      name: 'First Level Item',
      url: '/partner/contacts/list',
      icon: 'user',
      roles: ['ROLE_ADMIN', 'ROLE_PARTNER'],
      check: true,
    },
    {
      id: 4,
      name: 'Group 2',
      url: '/users',
      icon: 'user',
      roles: ['ROLE_ADMIN'],
      check: true,
      children: [
        {
          id: 41,
          name: 'Group 2 Item',
          class: '',
          roles: ['ROLE_ADMIN', 'ROLE_CC'],
          check: true,
        },
        {
          id: 42,
          name: 'Group 2 Item',
          url: '/expactocc',
          icon: 'user',
          roles: ['ROLE_ADMIN', 'ROLE_CC'],
          check: true,
        },
      ],
    },
    {
      id: 5,
      name: 'First Level Item',
      url: '/surveys/list',
      icon: 'user',
      roles: ['ROLE_ADMIN', 'ROLE_PARTNER'],
      check: true,
    },
  ],
};

export default MENU;
