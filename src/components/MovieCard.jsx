import React from "react";

class MovieCard extends React.Component {
  render() {
    const { movie: {title, subtitle, storyline, rating, imagePath} } = this.props;
    return(
      <div>
        <img src={imagePath} alt={title}></img>
      </div>
    )
  }
}

export default MovieCard
