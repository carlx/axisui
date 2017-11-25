import breadcrumbGenerator from '../utils/breadcrumb-generator';


describe('breadcrumb tests', () => {
  const routes = [
    {
      path: '/',
      name: 'Home page',
      exact: false,
    },
    {
      path: '/news',
      name: 'News page',
      exact: true,
    },
    {
      path: '/news/:newsId',
      name: 'News page with id',
      exact: true,
    },
  ];

  it('should correctly generate breadcrumb path array', () => {
    const location1 = { pathname: '/' };

    const expected1 = [
      {
        name: routes[0].name,
        url: location1.pathname,
      },
    ];

    expect(breadcrumbGenerator(routes, location1)).toEqual(expected1);

    const location2 = { pathname: '/news/123' };
    const expected2 = [
      ...expected1,
      {
        name: routes[2].name,
        url: location2.pathname,
      },
    ];
    expect(breadcrumbGenerator(routes, location2)).toEqual(expected2);
  });
});
