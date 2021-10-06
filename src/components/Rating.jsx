// implement Rating component here
import React from "react";
import PropTypes from "prop-types";

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

// Rating.defaultProps = { // -> COMO FOI USADO isRequired NO RATING.PROPTYPES, O DEFAULT NÃO É NECESSÁRIO!
//   rating: 0,
// }

export default Rating;
