import React from 'react';
import data from '../data';

class Rating extends React.Component {
  render() {
    // const { rating } = this.props;

    return (
      <div>
        {
          data.map((el) => el.rating)
        }
      </div>
    );
  }
}

// Rating.propTypes = {
//   rating: movies.string,
// };

export default Rating;
