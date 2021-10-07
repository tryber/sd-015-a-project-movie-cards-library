import React from 'react';
import PropTypes, { string } from 'prop-types';

class MovieCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { movie: {title, subtitle, storyline, imagepath, rating} } = this.props;
    return (
      <div key={ title }>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <img src={imagepath}></img>
        <p>{rating}</p>
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
