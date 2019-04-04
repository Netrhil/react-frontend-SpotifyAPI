import React, { Component } from 'react';
import { connect } from 'react-redux'

import Search from './containers/search';
import  Albums  from './containers/albums'
import SeeMore from './containers/see-more';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import '../src/styles/styles.css';

class App extends Component {
  
  render() {
    const { isCharging } = this.props;

    return (

      <div>
          <ToastContainer/>
          <Search/>
          <Albums/>
          <SeeMore/>
        {
          isCharging && <div className="loading">Loading&#8230;</div>
        }
      </div>

    );
  }
}

function mapStateToProps(state) {
  return({
    isCharging: state.isCharging
  })
}

export default connect(mapStateToProps)(App);
