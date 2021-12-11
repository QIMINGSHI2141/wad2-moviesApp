export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};
  
export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  // export const getUpcomingMovies = () => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  //   )
  //     .then(res => res.json())
  //     .then(json => json.results);
  // };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const getnowPlayingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };//updating

  export const gettopratedtMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };//updating

  export const getpopulartMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

    
    // export const getPopularPeople = async () => {
    //   return fetch(
    //     "https://api.themoviedb.org/3/person/popular?api_key=" +
    //       process.env.REACT_APP_TMDB_KEY +
    //       "&language=en-US"
    //   ).then( (response) => {
    //     if (!response.ok) {
    //       throw new Error(response.json().message);
    //     }
    //     return response.json();
    //   })
    //   .catch((error) => {
    //     throw error
    //  });
    // };
    
    export const searchCompany = async ({query}) => {
      const res = await fetch(`https://api.themoviedb.org/3/search/company?api_key=e572f589327604d8519e6a2cbdc9836f&page=1&query=${query}`);
      return await res.json();
    }

    export const searchTV = async ({query})=>{
      const url =`https://api.themoviedb.org/3/search/tv?api_key=e572f589327604d8519e6a2cbdc9836f&language=en-US&page=1&include_adult=false&query=${query}`;
      const res = await fetch(url);
      return await res.json();
    }

    export const getPeople = async (id)=>{
      const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=e572f589327604d8519e6a2cbdc9836f&language=en-US`
      const res = await fetch(url);
      return await res.json();
    }

    export const login = async (user) => {
      let res = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_TMDB_KEY}`);
      let { request_token } = await res.json();
      res = await fetch('https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=e572f589327604d8519e6a2cbdc9836f', {
        method: "post",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          ...user,
          request_token
        })
      });
      res = await res.json();
      if (res.success) {
        res = await fetch("https://api.themoviedb.org/3/authentication/session/new?api_key=e572f589327604d8519e6a2cbdc9836f", {
          method: "post",
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify({
            request_token: res.request_token
          })
        })
        return await res.json()
      }
      return false;
    }
    
    export const getAccount = async () => {
      const res = await fetch("https://api.themoviedb.org/3/account?api_key=e572f589327604d8519e6a2cbdc9836f&session_id=" + localStorage.getItem("session"))
      return await res.json();
    }

    export const getPopularActor = () => {
      return fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
         throw error
      });
    };
    
    export const getActor = (args) => {
      // console.log(args)
      const [, idPart] = args.queryKey;
      const { id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };
    
    export const getActorImages = ({ queryKey }) => {
      const [, idPart] = queryKey;
      const { id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };