import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default App;
