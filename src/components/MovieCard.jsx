// implement MovieCard component here
import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div key={ title } className="movie-card">
        <img src={ imagePath } alt={ subtitle } className="movie-card-image" />
      </div>);
  }
}
