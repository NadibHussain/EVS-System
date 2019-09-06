import React from 'react'
import { Route,  Redirect } from 'react-router-dom';

import * as Auth from '../authentication/Auth'

const Adminprotected = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.validAdmin() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);
export default Adminprotected;