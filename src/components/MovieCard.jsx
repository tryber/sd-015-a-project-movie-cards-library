// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    movies = this.props;
    return (
      <div className="content">
        {movies.map((movie) => (
          <div key={ movie.title } className="card">
            <img src={ movie.imagePath } alt="" />
            <h4>{movie.title}</h4>
            <h5>{movie.subtitle}</h5>
            <p>{movie.storyline}</p>
          </div>
        ))}
        <Rating />
      </div>
    );
  }
}

// MovieCard.propTypes = {
//   movies: propTypes.arr({
//     title: propTypes.string,
//     subtitle: propTypes.string,
//     storyline: propTypes.string,
//     imagePath: propTypes.string,
//   }),
// };

// MovieCard.defaultProps = {
//   movies: propTypes.arr({
//     title: '',
//     subtitle: '',
//     storyline: '',
//     imagePath: '',
//   }),
// };

export default MovieCard;
