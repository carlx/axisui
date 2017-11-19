import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import MainBreadcrumb from './MainBreadcrumb';
import BreadcrumbContainer from './BreadcrumbContainer';

const AppBreadcrumb = () => (
  <BreadcrumbContainer>
    <MainBreadcrumb>
      <Breadcrumb.Section link>Home</Breadcrumb.Section>
      <Breadcrumb.Divider>/</Breadcrumb.Divider>
      <Breadcrumb.Section link>Registration</Breadcrumb.Section>
      <Breadcrumb.Divider>/</Breadcrumb.Divider>
      <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
    </MainBreadcrumb>
  </BreadcrumbContainer>
);

export default AppBreadcrumb;
