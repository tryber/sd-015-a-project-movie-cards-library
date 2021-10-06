// implement MovieList component here
import React from "react";

class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { movies } = this.props;
    return (
      <section>
        <ul></ul>
      </section>
    )
  }
}

export default MovieList;
