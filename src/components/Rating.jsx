// implement Rating component here
import React from 'react';
// import PropTypes from 'prop-types';
// import movies from '../data';

class Rating extends React.Component {
// constructor(props) {
//         super(props)
// }
  render() {
    // const movies = this.props;
    return (
      <div className="rating">
        {/* {movies.map((movie) => (
          <div key={ movie.title } className="rate">
            <p>{ movie.rating }</p>
          </div>
        ))} */}
      </div>
    );
  }
}

// Rating.propTypes = {
//   movies: PropTypes.arrayOf({
//     rating: PropTypes.number,
//   }) };

// Rating.defaultProps = {
//   movies: propTypes.arrayOf({
//     rating: 0,
//   }) };

export default Rating;
