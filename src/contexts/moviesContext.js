import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [liked, setLiked] = useState( [] )
  const [favorites, setFavorites] = useState( [] )
  const [mustwatch, setMustwatch] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    setFavorites(newFavorites)
  };
  // We will use this function in a later section
  const addToMustwatch = (movie) =>{
    setMustwatch([...mustwatch,movie.id])
    console.log(...mustwatch,movie.id);
  }
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromMustwatch = (movie) =>{
    setMustwatch( mustwatch.filter(
      (mId) => mId !== movie.id 
    ))
  }
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToLiked = (actor) => {
    let newLiked = [];
    if (!liked.includes(actor.id)){
      newLiked = [...liked, actor.id];
    }else {
      newLiked=liked;
    }
    setLiked(newLiked)
  };
  return (
    <MoviesContext.Provider
      value={{
        favorites,
        mustwatch,
        liked,
        addToLiked,
        addToFavorites,
        addToMustwatch,
        removeFromFavorites,
        removeFromMustwatch,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;