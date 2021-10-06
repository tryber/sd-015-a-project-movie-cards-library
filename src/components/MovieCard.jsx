import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie:{ title, subtitle, storyline, imagePath, rating }} = this.props;
    return (
      <div key={ title }>
        <img src={ imagePath } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>

    );
  }
}

export default MovieCard;
