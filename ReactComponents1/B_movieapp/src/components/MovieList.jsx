import { Component } from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  render() {
    return (
      <>
        <h1>MovieList</h1>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </>
    );
  }
}
