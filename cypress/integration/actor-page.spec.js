let actors;    // List of movies from TMDB

// Utility functions
const filterByTitle = (actorList, string) =>
  actorList.filter((m) => m.name.toLowerCase().search(string) !== -1);

// const filterByGenre = (movieList, genreId) =>
//   movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Home Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        actors = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/actors")
  });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h3").contains("Discover Actors");
        cy.get("h1").contains("Filter the actors");
      });
    });
    describe("Filtering", () => {
        describe("By actor name", () => {
            it("should only display actors with m in the name", () => {
              let searchString = "m";
              let matchingActors = filterByTitle(actors, searchString);
              cy.get("#filled-search").clear().type(searchString); // Enter m in text box
              cy.get(".MuiCardHeader-content").should(
                "have.length",
                matchingActors.length
              );
              cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(matchingActors[index].name);
              });
            })
            it("should only display actors with o in the name", () => {
              let searchString = "o";
              let matchingMovies = filterByTitle(actors, searchString);
              cy.get("#filled-search").clear().type(searchString); // Enter m in text box
              cy.get(".MuiCardHeader-content").should(
                "have.length",
                matchingMovies.length
              );
              cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(matchingMovies[index].name);
              });

            });
            it("should only display actors with xyz in the name", () => {
                let searchString = "xyz";
                let matchingMovies = filterByTitle(actors, searchString);
                cy.get("#filled-search").clear().type(searchString);
                cy.get(".MuiCardHeader-content").should(
                  "have.length",
                    matchingMovies.length
                );

              })
          })
      });

      
  });