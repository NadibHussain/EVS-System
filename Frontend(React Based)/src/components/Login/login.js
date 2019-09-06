import React from 'react';
import '../../css/login.css';
import Loginform from './Loginform'
function Login(props) {
  return (
    <div className="login">
      <div className="App-container">
        <Loginform props={props}>
        </Loginform>
        <div className="credit">
        <p>Powered by : <span><img src={ require('../../images/logo.png')} alt="logo " /></span><span ><strong> Adiva Lab </strong></span></p>
        </div>
      </div>
     
    </div>
  );
}

export default Login;
