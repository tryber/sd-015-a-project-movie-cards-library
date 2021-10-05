import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

export default function App() {
  return (
    <div className="App">
      <Header />
      <MovieList key={ movies.title } movies={ movies } movie={ movies.rating } />
    </div>
  );
}
