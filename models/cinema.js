const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfFilmTitles = function () {
  const arrayOfTitles = this.films.map((movie) => {
    return movie.title
  })

  return arrayOfTitles;
};

Cinema.prototype.getFilmByTitle = function (title) {
  const getFilm = this.films.filter((film) => {
    if (film.title === title){
      return film;
    }
  });
  return getFilm[0];
};

Cinema.prototype.getFilmByGenre = function (genre) {
  const getGenre = this.films.filter((film) => {
    if (film.genre === genre){
      return film;
    }
  });
  return getGenre;

};

module.exports = Cinema;
