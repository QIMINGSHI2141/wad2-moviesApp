# Assignment 1 - ReactJS app.

Name: [Qiming Shi]

## Overview.

[A brief statement on the content of this repository.]

### Features.

+ Feature 1-Provides the ability to login to authenticate TMDB accounts
+ Feature 2-Information and pictures of actors have been added to the details of the movies
+ Feature 3-Added popular movies interface, and can add movies to want to watch
+ Feature 4-Added top-rated movies interface, and can add movies to want to watch
+ Feature 5-Added nowplaying movies interface, and can add movies to want to watch
+ Feature 6-Added a web page to search for actors, basically similar to movies
+ Feature 7-Added company search to search for company logos
+ Feature 8-Added TV search, which shows TV with similar keywords
+ Feature 9-Added a more list at the top to arrange more buttons



## Setup requirements.

Add"dependencies":"antd-mobile": "^5.0.0-rc.4", (---for UI)

Use 'npm install' to download node_modules

## API Endpoints

- https://api.themoviedb.org/3/movie/${id}/credits  -get actors info in the movie details screen
- https://api.themoviedb.org/3/person/popular - get a list of popular actors.
- https://api.themoviedb.org/3/person/${id}/images -get images for actors
- https://api.themoviedb.org/3/movie/upcoming -get upcoming movies
- https://api.themoviedb.org/3/movie/now_playing -get now_playing movies
- https://api.themoviedb.org/3/movie/top_rated -get top_rated movies
- https://api.themoviedb.org/3/movie/popular -get popular movies
- https://api.themoviedb.org/3/search/company -get to search company info
- https://api.themoviedb.org/3/search/tv -get to search TV info
- https://api.themoviedb.org/3/authentication/token/new -Create a temporary request token that can be used to validate a TMDB user login
- https://api.themoviedb.org/3/authentication/token/validate_with_login -Validate a request token by entering a username and password.
- https://api.themoviedb.org/3/authentication/session/new -Create a fully valid session ID once a user has validated the request token
- https://api.themoviedb.org/3/account -get account details



### Component catalogue.

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\home.png" style="zoom: 33%;" />

> Shows what I can display on my current home page, basically in the header_site. The interface can be jumped through buttons.

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\Login.png" style="zoom: 33%;" />

> The login page is shown in the figure above.

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\enterlogin.png" style="zoom:33%;" />

> Enter the correct TMDB account and password and click login

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\loginsuccess.png" style="zoom: 33%;" />

> Successful login popover

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\wrongacc.png" style="zoom:33%;" />

> If input wrong account password

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\loginfailed.png" style="zoom: 33%;" />

> Login failure popover

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\changeoflogin.png" style="zoom:50%;" />

> After successfully logging in, you can choose to log out

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\selectmoreinfo.png" style="zoom:33%;" />

> Click the MoreInfo button in any movie pages

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\actorsindetails.png" style="zoom:33%;" />

> In the movie details page, there are pictures of the actors involved in the movie.

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\Review.png" style="zoom:33%;" />

> Review is still displayed as a drop-down menu

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\like.png" style="zoom:33%;" />

> When you choose to like

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\like0.png" style="zoom:33%;" />

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\favoritepage.png" style="zoom:33%;" />

>Change after clicking the "Like" button

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\upcoming.png" style="zoom:33%;" />

> A list of upcoming movies

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\filtermovies.png" style="zoom:33%;" />

> Using the filter, enter the movie name that contains "a" and select the option that belongs to the family category.

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\addmustwatch.png" style="zoom:33%;" />

> The buttons in this section are used to add movies to the list you want to see

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\mustwatch.png" style="zoom:33%;" />

>After clicking on the first two movies, click on the Mustwatch button to enter the page and view the movies that have been added to the list.

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\nowplaying.png" style="zoom:25%;" />

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\popular.png" alt="popular" style="zoom:25%;" />

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\toprated.png" alt="toprated" style="zoom:25%;" />

>There's not much more to say about similar pages.

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\morelist.png" style="zoom:33%;" />

>Click the "more" button at the top to display clickable links from the side. This includes some links that already exist in Headsiter, as well as some content that is not particularly relevant to the movie.

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\linktoactor.png" style="zoom:33%;" />

> This is an actor page similar to a movie page.

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\actorspage.png" style="zoom:33%;" />

> It retains the ability to retrieve actors, as well as a movie card-like function.

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\TVPAGE.png" style="zoom:33%;" />

> This page is used to search for TV names and find similar shows,It displays the corresponding TV series only after the keyword is entered.

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\TVsearch.png" style="zoom:33%;" />

> Enter keywords and it will display the corresponding TV series, along with posters and a brief introduction.

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\company.png" style="zoom:33%;" />

> Similar to TV, the company section also provides corresponding search.

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\companysearch.png" style="zoom:33%;" />

> Enter the keywords and the page will provide the corresponding company icon



## Routing.

+ Discover list of movies - discover/movie

+ Movie details - movie/:id

+ Movie genres = /genre/movie/list

+ Movie popular = /movies/popular(same like upcoming ,top_rated, nowplaying)

+ Login page = /movies/login

+ Actors page = /actors

+ Search TV = /movies/tv(like Company)

  

## Independent learning

> UI Libraries called antd-mobile

> I have also gained experience in sending post requests to websites





# Assignment 1 - Agile Software Practice.

Name: [Qiming Shi]

## App Features.

- Upcoming Movies page - Shows the upcoming movies. The header of this page should be Upcoming Movies. The movie title filter and genre function should run successfully.

Tests: cypress/integration/upcoming-page.spec.js

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\upcomingtest.png" style="zoom:33%;" />

+ Toprated Movies page - Shows the toprated movies. The header of this page should be Toprated Movies. The movie title filter and genre function should run successfully.

Tests: cypress/integration/toprated-page.spec.js

![](E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\topratedtest.png)

+ Nowplaying Movies page - Shows the nowplaying movies. The header of this page should be Nowplaying Movies. The movie title filter and genre function should run successfully.

Tests: cypress/integration/nowplaying-page.spec.js

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\nowplayingtest.png" style="zoom:33%;" />

+ Actors page - Shows Actors. The header of this page should be Discover Actors. The actor  filter should run successfully.

Tests: cypress/integration/actor-page.spec.js

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\actortest.png" style="zoom:33%;" />

+ More button - Clicking this button should successfully jump to the target page from all the links which has set up.

Tests: cypress/integration/more-list.spec.js

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\morelisttest.png" style="zoom:33%;" />

+ Login Page-The login interface should be tested based on whether the user name and password entered can be logged in successfully. After successful login, the login button will become logout. If the login fails, it will remain unchanged.

Tests: cypress/integration/login-page.spec.js

<img src="E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\logintest.png" style="zoom:33%;" />



+ Gitlab：

  ![](E:\FORTHYEAR\webApplication\startcodee\moviesApp\images\gitlab.png)