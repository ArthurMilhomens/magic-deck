import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Layout from './components/Layout'

const Routes = () => {
  const [authentication, setAuthentication] = useState(true);
  const [search, setSearch] = useState(0)

  const ProtectRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      true ? <Component {...props} /> : <Redirect to={{ pathname: "/", state: { from: props.location } }} />
    )} />
  )

  const routeOptions = [
    { name: "Home", path: "/home", component: <Home search={search} setSearch={setSearch}/> },
    // { name: "Clientes", path: "/clientes", component: <Clientes search={search} setSearch={setSearch}/> },
    // { name: "Domínios", path: "/dominios", component: <Dominios search={search} setSearch={setSearch}/> },
    // { name: "Notificações", path: "/notificacoes", component: <Notificações search={search} setSearch={setSearch}/> },
    // { name: "Contato", path: "/contato", component: <Contato search={search} setSearch={setSearch}/> },
  ]


  return (<Switch>
    <Route exact path="/" component={() => <Dashboard/> } />
    <Route path={["/home"]} render={props => (
      <Layout {...props} name={(routeOptions.find(route => route.path === props.location.pathname)).name} search={search} setSearch={setSearch}>
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