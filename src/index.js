import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPages from "./pages/upcomingMoviesPage"
import nowplayingMoviesPages from "./pages/nowplayingMoviesPage"
import popularMoviesPages from "./pages/popularMoviesPage"
import topratedMoviesPages from "./pages/topratedMoviesPage.js"
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import MustwatchMoviesPage from "./pages/mustwatchMoviesPage";
// import PopularPeoplePage from "./pages/popularPeoplePage"
// import PersonPage from "./pages/personPage"
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
          {" "}
          <Switch>
        {/* <Route path="/people/popular" component={PopularPeoplePage} />
        <Route path="/people/:id" component={PersonPage} /> */}
        <Route exact path="/movies/popular" component={popularMoviesPages} />  
        <Route exact path="/movies/toprated" component={topratedMoviesPages} />   
        <Route exact path="/movies/nowplaying" component={nowplayingMoviesPages} />
        <Route exact path="/movies/mustwatch" component={MustwatchMoviesPage} />
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPages} />
        <Route path="/reviews/:id" component={MovieReviewPage} /> 
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
      </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});
ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));

//updating