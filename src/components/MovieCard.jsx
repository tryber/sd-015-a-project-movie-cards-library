// implement MovieCard component here
import React from 'react';
import MovieStoryline from './MovieStoryline';

class MovieCard extends React.Component {
  render() {
    console.log('Whaat', this.props.movie);
    const { title, subtitle, rating, storyline, imagePath } = this.props.movie;
    return (
      <section className="card-wrapper">
        <img className="movie-pic" src={ imagePath } alt="" />
        <div className="movie-description">
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <MovieStoryline storyline={ storyline } />
        </div>
        <div className="movie-rating">
          <p>{rating}</p>
        </div>
      </section>
    );
  }
}

export default MovieCard;
