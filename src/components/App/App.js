import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom'
import './App.css';

// import Filter from '../Filter/Filter'
import FilterContainer from '../FilterContainer/FilterContainer'
import Image from '../Image/Image'
// import ShareFacebook from '../ShareFacebook/ShareFacebook'
import Upload from '../Upload/Upload'
import Header from '../Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route
            path='/'
            component={Header}
          />
          <Route
            path='/'
            component={Image}
          />
          <Route
            path='/'
            component={FilterContainer}
          />
          <Route
            path='/'
            component={Upload}
          />

        </main>
      </div>
    );
  }
}

export default App;
