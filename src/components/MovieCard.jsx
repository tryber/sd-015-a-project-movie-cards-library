import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movies:{ title, subtitle, storyline, imagePath} } = this.props;
    return (
      <section>
        <img src={imagePath} alt={title}/>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <p>{storyline}</p>
      </section>
    );
  }
}

export default MovieCard;
