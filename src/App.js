import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <>
      <Header />
      <MovieList movies={ movies } />
      <footer className="footer is-link $footer-background-color">
        <div className="content has-text-centered ">
          <p>
            Create by
            <strong> Raphael Taglialegna</strong>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
