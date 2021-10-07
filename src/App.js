import React from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <MovieList movies={ data } />
      </main>
    );
  }
}

export default App;
