import React from 'react';
import propTypes from 'prop-types';


class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div key= { movie.title }>
        <p>{movie.title}</p>
        <p>{movie.subtitle}</p>
        <p>{movie.storyline}</p>
        <img src= {  imagePath }/>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  movie: PropTypes.instanceOf(Object), //Conforme material do distribuido disponivel em https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
};

export default MovieCard;
