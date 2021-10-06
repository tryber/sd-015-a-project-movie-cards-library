// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    //console.log(movies);
    return (
      <section className="movie-list">
        { movies.map((e) => <MovieCard key={ e.title } movie={ e } />) }
      </section>);
  }
}
