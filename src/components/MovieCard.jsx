import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // const {movie} = this.props;
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="" />
        {/* <h4>{ movie.title }</h4> */}
        <h4>{ title }</h4>
        <h5>{ subtitle}</h5>
        <p>{ storyline}</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

export default MovieCard;
