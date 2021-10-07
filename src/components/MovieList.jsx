// implement MovieList component here
import React from 'react';
import data from '../data';
import Rating from './Rating';

const getMovieList = () => data.map(
  ({ title, subtitle, storyline, rating, imagePath }, index) => (
    <div key={ `${index}` } className="movie-card">
      <img src={ imagePath } alt="" />
      <div className="movie-card-body">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
      </div>
      <div className="movie-card-rating">
        <Rating rating={ rating } />
      </div>
    </div>
  ),
);

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <section className="movie-list">
          {getMovieList()}
        </section>
      </div>
    );
  }
}

export default MovieList;
