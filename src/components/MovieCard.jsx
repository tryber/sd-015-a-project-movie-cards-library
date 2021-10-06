// implement MovieCard component here
import React from "react";

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath } } = this.props;
    return (
      <div>
        <img src={imagePath} alt="" />
      </div>
    )
  }
}

export default MovieCard;
