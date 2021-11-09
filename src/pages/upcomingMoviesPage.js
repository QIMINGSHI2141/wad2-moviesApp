import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { useQuery } from 'react-query'
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner'
// import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import PlaylistAddIcon from '../components/cardIcons/addToMustwatch';
// const UpcomingMoviesPages = (props) => {
//     const [movies, setMovies] = useState([]);
//     const favorites = movies.filter(m => m.favorite)
//     localStorage.setItem('favorites', JSON.stringify(favorites))

//     const addToFavorites = (movieId) => {
//         const updatedMovies = movies.map((m) =>
//           m.id === movieId ? { ...m, favorite: true } : m
//         );
//         setMovies(updatedMovies);
//       };

//       useEffect(() => {
//         getUpcomingMovies().then(movies => {
//           setMovies(movies);
//         });
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//       }, []);

//       return (
//         <PageTemplate
//           title='Discover Movies'
//           movies={movies}
//           selectFavorite={addToFavorites}
//         />
//       );
//     };
//     export default UpcomingMoviesPages;

    const UpcomingMoviesPages = (props) => {
      const {  data, error, isLoading, isError }  = useQuery('upcoming',getUpcomingMovies )
    
      if (isLoading) {
        return <Spinner />
      }
    
      if (isError) {
        return <h1>{error.message}</h1>
      }  
      const movies = data.results;
    
      // Redundant, but necessary to avoid app crashing.
      const favorites = movies.filter(m => m.favorite)
      localStorage.setItem('favorites', JSON.stringify(favorites))
      //const addToFavorites = (movieId) => true 
    
      return (
        <PageTemplate
          title="Upcoming Movies"
          movies={movies}
          action={(movie) => {
            return <PlaylistAddIcon movie={movie} />
          }}
        />
    );
    };
    
    export default UpcomingMoviesPages;