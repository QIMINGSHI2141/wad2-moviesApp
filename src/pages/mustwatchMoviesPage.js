import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromMustwatch from "../components/cardIcons/removeFromMustwatch";
import WriteReview from "../components/cardIcons/writeReview";

const MustwatchMoviesPage = () => {
  const {mustwatch: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const mustwatchMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = mustwatchMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const movies = mustwatchMovieQueries.map((q) => q.data);
  const toDo = () => true;

  return (
    <PageTemplate
      title="Mustwatch Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromMustwatch movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default MustwatchMoviesPage;