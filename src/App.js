import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import News from './News';
import AppLayout from './components/AppLayout/AppLayout';
import './App.css';

const routes = [
  {
    exact: false,
    component: Home,
    name: 'Strona domowa',
    path: '/',
  },
  {
    exact: false,
    component: Home,
    name: 'Home',
    path: '/home',
  },
  {
    exact: false,
    component: Home,
    name: 'Testy',
    path: '/home/test',
  },
  {
    exact: true,
    component: News,
    name: 'Nowosci',
    path: '/news',
  },
  {
    exact: true,
    component: News,
    name: 'Nowosci2',
    path: '/news/:userId',
  },
];

const App = () => (
  <AppLayout routes={routes}>
    <Switch>
      {routes.map((route) => <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />)}
    </Switch>
  </AppLayout>
);

export default App;
