import React, { Component } from 'react';
import {
  Link,
  Route
} from 'react-router-dom'
import './App.css';

// import Filter from '../Filter/Filter'
import FilterContainer from '../FilterContainer/FilterContainer'
import Image from '../Image/Image'
import ShareFacebook from '../ShareFacebook/ShareFacebook'
import Upload from '../Upload/Upload'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route
            path='/'
            component={Image}
          />
          <Route
            path='/'
            component={FilterContainer}
          />
        
        </main>
      </div>
    );
  }
}

export default App;
