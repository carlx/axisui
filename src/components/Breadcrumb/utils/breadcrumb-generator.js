import { matchPath } from 'react-router-dom';

const breadcrumbGenerator = (routes, location) => {
  const breadcrumb = [];
  routes.forEach((route) => {
    const match = matchPath(location.pathname, route);
    if (match) {
      breadcrumb.push({
        name: route.name,
        url: match.url,
      });
    }
  });
  return breadcrumb;
};

export default breadcrumbGenerator;
