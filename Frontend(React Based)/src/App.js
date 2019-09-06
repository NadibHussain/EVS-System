import React, { Component } from 'react';
import {BrowserRouter as Router,} from 'react-router-dom';
import 'antd/dist/antd.css';
import './css/App.css';
import BaseRouter from './route/routes'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <BaseRouter/>
        </Router>
      </div>
    );
  }
}

export default App;
