import React, { Component } from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <MovieList movies={ movies } />
        </div>
      </div>
    );
  }
}

export default App;
