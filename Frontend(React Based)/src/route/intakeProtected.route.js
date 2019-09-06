import React from 'react'
import { Route,  Redirect } from 'react-router-dom';

import * as Auth from '../authentication/Auth'

const Intakeprotected = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        Auth.validIIntake() ? (
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
  
export default Intakeprotected;