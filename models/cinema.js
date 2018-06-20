const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfFilmTitles = function () {
  const arrayOfTitles = this.films.map((movie) => {
    return movie.title
  })

  return arrayOfTitles;
};

Cinema.prototype.getListOfFilmYear = function () {
  const arrayOfTitles = this.films.map((movie) => {
    return movie.year;
  })

  return arrayOfTitles;
};

Cinema.prototype.getFilmByTitle = function (title) {
  const getFilm = this.films.find((film) => {
    if (film.title === title){
      return film;
    }
  });

  return getFilm;
};

// Cinema.prototype.getFilmByGenre = function (genre) {
//   const getGenre = this.films.filter((film) => {
//     if (film.genre === genre){
//       return film;
//     }
//   });
//   return getGenre;
// };
//

Cinema.prototype.getFilmByProperty = function (property, variable) {
  const getYear = this.films.filter((film) => {
    if (film[property] === variable){
      return film;
    }
    });
    return getYear;
  }


Cinema.prototype.hasFilmByYear = function (year) {
  const arrayOfYears = this.getListOfFilmYear();
  const result = arrayOfYears.includes(year);
  return result;
};

Cinema.prototype.getFilmsByLength = function (length) {
  const filmsByLength = this.films.filter((film) =>{
    return film.length > length;
  })
  return filmsByLength;
};

Cinema.prototype.totalRunningTime = function () {
  const total = this.films.reduce((runningTotal, film) =>{
    return runningTotal + film.length;
  }, 0);

  return total;
};

module.exports = Cinema;
