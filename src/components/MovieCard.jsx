import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { movie: { title, subtitle, storyline, rating } } = this.props;
    return (
      <div key={ title }>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        {/* <img src={ imagepath } alt={ title }> */}
        <Rating nota={ rating } className="rating" />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagepath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'Título genérico',
    subtitle: 'Subtítulo genérico',
    storyline: 'Storiline genérico',
    imagepath: 'Caminho genérico da imagem',
    rating: 666,
  },
};

export default MovieCard;
