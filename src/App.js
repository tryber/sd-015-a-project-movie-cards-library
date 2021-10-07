import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList movie={ movies } />
      </div>
    );
  }
}

export default App;
