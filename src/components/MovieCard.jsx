import React from 'react';
import '../App.css'
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props
    const { title, subtitle, storyline, imagePath, rating } = movie
    return (
      <div className='movie-card' key={title}>
        <img src={imagePath} alt='' className='movie-card-image'></img>
        <h4 className='movie-card-title' >{title}</h4>
        <h5 className='movie-card-subtitle'>{subtitle}</h5>
        <p className='movie-card-storyline'>{storyline}</p>
        <Rating rating={rating} />
      </div>
    )
  }
}
export default MovieCard