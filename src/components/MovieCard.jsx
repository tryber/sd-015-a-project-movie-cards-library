// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
/* title: 'Ghost In The Shell',
    subtitle: 'Ghost In The Shell',
    storyline: 'A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).',
    rating: 5,
    imagePath: 'images/Ghost_In_The_Shell_2_0.jpg',
 */
class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <img src={ this.props.movie.imagePath } alt="Movie icon" />
        <h4>
          {this.props.movie.title}
        </h4>
        <h5>
          {this.props.movie.subtitle}
        </h5>
        <p>
          {this.props.movie.storyline}
        </p>
        <div>
          <Rating />
        </div>
      </div>
    );
  }
}

export default MovieCard;
