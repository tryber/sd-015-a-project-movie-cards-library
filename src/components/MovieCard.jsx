// implement MovieCard component here
import React from "react";

class MovieCard extends React.Component {
  render(){
    console.log(this.props.movie);
    const { movie: { imagePath, title, subtitle, storyline, rating } } = this.props;
    // const movie = {
    //   title : this.props.movie.title,
    //   subtitle: this.props.movie.subtitle,
    //   storyline: this.props.movie.storyline,
    //   imagePath: this.props.movie.imagePath,
    //   rating: this.props.movie.rating,
    // }
    return (
      <div className="movie-card">
        <img
        className="movie-card-image" 
        src={imagePath} 
        alt={`Imagem do filme ${title}`} />

        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>

      </div>
      
      
    ) 

  }
}

export default MovieCard;
