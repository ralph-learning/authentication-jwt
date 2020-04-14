import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './auth';

function PrivateRoute({ component: Component, ...rest }: any) {
  const redirectTo = (props: any) => {
    return {
      pathname: "/",
      state: { from: props.location }
    }
  };

  return (
    <Route {...rest} render={props => {
      return isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={redirectTo(props)} />
      );
    }} />
  )
}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>Home</h1>} />
        <PrivateRoute exact path="/app" component={() => <h1>Private Page</h1>} />
      </Switch>
    </BrowserRouter>
  )
}
