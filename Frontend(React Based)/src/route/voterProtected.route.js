import React from 'react'
import { Route,  Redirect } from 'react-router-dom';

import * as Auth from '../authentication/Auth'

const Voterprotected = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.validVoter() ? (
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
export default Voterprotected;