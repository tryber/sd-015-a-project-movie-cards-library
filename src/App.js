import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import moviesData from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ moviesData } />
      </div>
    );
  }
}

export default App;
