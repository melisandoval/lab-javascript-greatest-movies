//
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectorsBonus(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director).sort();
  return [...new Set(directors)];
}

// 😄 got Set() from : https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o

//
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  const spielbergDramaMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );

  return spielbergDramaMovies.length;
}

//
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  const averageScore =
    moviesArray.reduce((a, b) => a + (b.score || 0), 0) / moviesArray.length;

  return Number(averageScore.toFixed(2));
}

/*
previous code inside the function instead of (b.score || 0) 
for the test "should return average even if 
one of the movies does not have score":

(before calculating the average):

moviesArray.forEach((movie) => {
  if (movie.score === "" || !movie.score) {
    movie.score = 0;
  }
});

const testArr = [{ score: 6 }, { score: "" }, {}];
console.log(scoresAverage(testArr));
*/

//
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  const onlyDramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (!onlyDramaMovies.length) return 0;

  const averageScore =
    onlyDramaMovies.reduce((a, b) => a + (b.score || 0), 0) /
    onlyDramaMovies.length;

  return Number(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArr = [...moviesArray];

  const sortedByYear = newArr.sort((a, b) => a.year - b.year);

  return sortedByYear;
}

const testArr = [
  { title: "abc", year: 2002 },
  { title: "bac", year: 1982 },
  { title: "aab", year: 1982 },
];

// console.log(orderByYear(testArr));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map((movie) => movie.title);
}
// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
