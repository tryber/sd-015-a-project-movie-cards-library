// implement MovieCard component here
import React from "react";
import Rating from "./Rating";

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, subtitle, storyline, rating } } = this.props;
    console.log(rating)
    return (
      <div>
        <img src={imagePath} alt="image-movie" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating}/>
      </div>
    )
  }
}

export default MovieCard;
