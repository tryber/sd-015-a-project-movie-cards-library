import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {
      movies: { title, subtitle, storyline, rating, imagePath },
    } = this.props;
    return( 
    <div movies={title}>
      <p>{title}</p>
      <p>{subtitle}</p>
      <p>{storyline}</p>
      <img src={imagePath} alt={subtitle} />
      <p>{rating}</p>
  </div>
    )}
}

export default MovieCard;
