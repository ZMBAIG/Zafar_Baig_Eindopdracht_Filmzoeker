//=============Welkome by the Winc Filmzoeker=====================================

const mainFilmList = document.querySelector("#winc-movielist");
console.log(mainFilmList);

const radButtons = document.getElementsByName("filter");
console.log(radButtons);

//============== Adding movies to the DOM from movies database=========================
const addMoviesToDom = (moviesData) => {
  const wincMovieListItems = moviesData.map((movie) => {
    const listItem = document.createElement("li");

    const connectNewImage = document.createElement("img");
    connectNewImage.src = movie.Poster;

    const linkOnPoster = document.createElement("a");
    linkOnPoster.href = "https://www.imdb.com/title/" + movie.imdbID;
    linkOnPoster.target = "_blank";

    listItem.appendChild(linkOnPoster);
    linkOnPoster.appendChild(connectNewImage);

    return listItem;
  });

  wincMovieListItems.forEach((listitem) => {
    mainFilmList.appendChild(listitem);
  });
};
//=============Removing Movies==================================================

const removeMoviesFromDom = () => {
  mainFilmList.innerHTML = "";
};

//=============Filtering Movies by using different array methods=================

const filterMovies = (getMovieTitle) => {
  return moviesData.Movies.filter((movie) => {
    return movie.Title.toLowerCase().includes(getMovieTitle.toLowerCase());
  });
};

//=============Filtering Movies by calander=======================================
const filmFilter = () => {
  return moviesData.Movies.filter((movie) => {
    return movie.Year >= 2014;
  });
};
//=============Radio button change handler events================================

const handleOnChangeEvent = (event) => {
  switch (event.target.value) {
    case "nieuwste":
      console.log(filmFilter());
      removeMoviesFromDom();
      addMoviesToDom(filmFilter());
      break;
    case "avengers":
      console.log(filterMovies("Avengers"));
      removeMoviesFromDom();
      addMoviesToDom(filterMovies("Avengers"));
      break;
    case "xmen":
      console.log(filterMovies("Batman"));
      removeMoviesFromDom();
      addMoviesToDom(filterMovies("X-Men"));
      break;
    case "princess":
      console.log(filterMovies("Princess"));
      removeMoviesFromDom();
      addMoviesToDom(filterMovies("Princess"));
      break;
    case "batman":
      console.log(filterMovies("Batman"));
      removeMoviesFromDom();
      addMoviesToDom(filterMovies("Batman"));
      break;
    default:
      console.log("Unkown Error");
      break;
  }
};
//=============Adding eventlistner using foreach loop=============================

radButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => handleOnChangeEvent(event));
});

//=============Searching film====================================================

const search_area = document.querySelector("#search_area");
console.log(search_area);

search_area.addEventListener("change", (search_area) => {
  const searchWords = search_area.target.value;
  const filteredMovies = filterMovies(searchWords);

  removeMoviesFromDom();
  addMoviesToDom(filteredMovies);
});

addMoviesToDom(moviesData.Movies);
