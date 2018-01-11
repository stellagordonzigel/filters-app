import React, { Component } from 'react';
import {
  Route, Redirect
} from 'react-router-dom'
import './App.css';

import FilterContainer from '../FilterContainer/FilterContainer'
import Header from '../Header/Header'
import ImageUploadContainer from '../ImageUploadContainer/ImageUploadContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <FilterContainer />
          <ImageUploadContainer />
          <Route
            path='/*'
            render={() => <Redirect to='/' />}
          />
        </main>
      </div>
    );
  }
}

export default App;
