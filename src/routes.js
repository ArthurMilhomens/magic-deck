import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Layout from './components/Layout';

import { useHistory } from "react-router-dom";

const Routes = () => {
  const authenticate = localStorage.getItem('log') === null ? false : true;
  const history = useHistory();

  authenticate && history.push('/home')

  const ProtectRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      true ? <Component {...props} /> : <Redirect to={{ pathname: "/", state: { from: props.location } }} />
    )} />
  )

  const routeOptions = [
    { name: "Home", path: "/home", component: <Home/> },
  ];

  return (<Switch>
    <Route exact path="/" component={() => <Dashboard/> } />
    <Route path={["/home"]} render={props => (
      <Layout {...props} name={(routeOptions.find(route => route.path === props.location.pathname)).name}>
        <Switch>
          {routeOptions.map((route, index) => (
            <ProtectRoute key={index} path={route.path} component={() => route.component} />
          ))}
        </Switch>
      </Layout>)}>
    </Route>
  </Switch>)
}

export default Routes;