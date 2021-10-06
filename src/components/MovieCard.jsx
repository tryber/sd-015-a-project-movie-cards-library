// implement MovieCard component here
import React from "react";

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, subtitle, storyline } } = this.props;
    return (
      <div>
        <img src={imagePath} alt="image-movie" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
    )
  }
}

export default MovieCard;
