import React from 'react';
import Rating from './Rating';
import data from '../data';

class MovieCard extends React.Component {
  render() {
    return (
      data.map((element) => (
        <div key={ element.title }>
          <div>
            <h4>{element.title}</h4>
            <h5>{element.subtitle}</h5>
            <p>{element.storyline}</p>
            <img src="{element.imagePath}" alt="Algo" />
            <div>
              <Rating />
            </div>
          </div>
        </div>
      ))
    );
  }
}

// movies.prototype = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   storyline: PropTypes.string,
//   imagePath: Proptypes.string,
// };
export default MovieCard;
