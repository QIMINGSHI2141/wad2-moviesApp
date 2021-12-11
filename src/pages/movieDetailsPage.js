import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { getPeople } from '../api/tmdb-api'
const MovieDetailsPage = (props) => {
  const { id } = props.match.params
  const [peoples, setPeoples] = useState()

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (!peoples) {
    if (movie) {
      getPeople(movie.id).then(res => {
        setPeoples(res.cast);
      })
    }
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <div style={{ "display": "flex", "flexWrap": "wrap" ,"zIndex":"-999"}}>
              {(peoples || []).map(people => {
                if (!people.profile_path) {
                  return null;
                }
                return (
                  <div key={people.id} style={{ "position": "relative" }}>
                    <img src={`https://image.tmdb.org/t/p/w500/${people.profile_path}`} width={150} height={200} alt="people" />
                    <p style={{ "width": "100%", "bottom": "0", "position": "absolute", "backgroundColor": "rgba(0,0,0,.5)", "padding": "10px", "color": "#fff", "margin": "0" }}>{people.original_name}</p>
                  </div>
                )
              })}
            </div>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(MovieDetailsPage);