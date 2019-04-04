import React, { Component } from 'react';
import Search from './containers/search';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <div>
          <ToastContainer/>
          <Search/>
          <p> works!</p>
      </div>

    );
  }
}

export default App;
