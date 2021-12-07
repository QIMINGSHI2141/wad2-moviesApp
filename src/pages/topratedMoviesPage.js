import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { useQuery } from 'react-query'
import { gettopratedtMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import PlaylistAddIcon from '../components/cardIcons/addToMustwatch';

    const TopratedMoviesPages = (props) => {
      const {  data, error, isLoading, isError }  = useQuery('latest',gettopratedtMovies )
    
      if (isLoading) {
        return <Spinner />
      }
    
      if (isError) {
        return <h1>{error.message}</h1>
      }  
      const movies = data.results;
    
      // Redundant, but necessary to avoid app crashing.
    //   const favorites = movies.filter(m => m.favorite)
    //   localStorage.setItem('favorites', JSON.stringify(favorites))
      //const addToFavorites = (movieId) => true 
    
      return (
        <PageTemplate
          title="Nowplaying Movies"
          movies={movies}
          action={(movie) => {
            return <PlaylistAddIcon movie={movie} />
          }}
        />
    );
    };
    
    export default TopratedMoviesPages;