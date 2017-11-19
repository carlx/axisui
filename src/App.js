import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import News from './News';
import AppLayout from './components/AppLayout/AppLayout';
import './App.css';

const App = () => (
  <AppLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/news" component={News} />
    </Switch>
  </AppLayout>
);

export default App;
