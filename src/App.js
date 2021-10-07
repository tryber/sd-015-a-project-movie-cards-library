import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <div>
        <MovieList movie={ movies } />

      </div>
    );
  }
}

export default App;
