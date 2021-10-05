import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

// async function getApi() {
//   fetch('https://movie-database-imdb-alternative.p.rapidapi.com/', {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
//       'x-rapidapi-key': 'b102cb6fcamsh2d8a2a37fa63af7p17cefdjsnfb57bb9ecdb9',
//     },
//   })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

// getApi();
const filmsArray = [{
  title: 'abc',
  subtitle: 'ade',
  storyline: 'asdausdhioasd',
  imagePath: 'asdijiasjd',
  rating: 'asdasd',
}, {
  title: 'abc',
  subtitle: 'ade',
  storyline: 'asdausdhioasd',
  imagePath: 'asdijiasjd',
  rating: 'asdasd',
}, {
  title: 'abc',
  subtitle: 'ade',
  storyline: 'asdausdhioasd',
  imagePath: 'asdijiasjd',
  rating: 'asdasd',
}];

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ filmsArray } />
    </div>
  );
}

export default App;
