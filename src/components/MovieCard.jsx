// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

/* title: 'Ghost In The Shell',
    subtitle: 'Ghost In The Shell',
    storyline: 'A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).',
    rating: 5,
    imagePath: 'images/Ghost_In_The_Shell_2_0.jpg',
 */
class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="Movie icon" />
        <h4>
          {title}
        </h4>
        <h5>
          {subtitle}
        </h5>
        <p>
          {storyline}
        </p>
        <div>
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
export default MovieCard;
