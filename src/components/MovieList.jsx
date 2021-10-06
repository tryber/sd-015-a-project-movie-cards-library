import React, { Component } from 'react';
// import movies from '../data';

class MovieList extends Component {
  render() {
    const movies = this.props;

    return (<section className="movie-list">{movies}</section>);
  }
}

export default MovieList;
