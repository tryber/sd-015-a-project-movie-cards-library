import React from "react";

class MovieCard extends React.Component {
  render() {
    const {movie: {title, subtitle, storyline, imagePath, rating}} = this.props;
    return (
      <div>
        <img src={imagePath} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
    )
  }
}

export default MovieCard;