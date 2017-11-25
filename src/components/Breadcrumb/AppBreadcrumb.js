import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react';
import MainBreadcrumb from './MainBreadcrumb';
import BreadcrumbContainer from './BreadcrumbContainer';
import BreadcrumbSection from './BreadcrumbSection';
import BreadcrumbDevider from './BreadcrumbDevider';
import breadcrumbGenerator from './utils/breadcrumb-generator';


const AppBreadcrumb = (props) => {
  const breadcrumbs = breadcrumbGenerator(props.routes, props.location);
  const last = breadcrumbs.length - 1;
  return (
    <BreadcrumbContainer>
      <MainBreadcrumb>
        {breadcrumbs.map((crumb, index) =>
          <span key={crumb.url}>
            <Link to={crumb.url}><BreadcrumbSection active={index === last}>{crumb.name}</BreadcrumbSection></Link>
            {(index !== last) && <BreadcrumbDevider icon="right angle"></BreadcrumbDevider> }
          </span>
        )}
      </MainBreadcrumb>
    </BreadcrumbContainer>
  );
}

AppBreadcrumb.propTypes = {
  location: PropTypes.object,
  routes: PropTypes.array,
};

export default AppBreadcrumb;
