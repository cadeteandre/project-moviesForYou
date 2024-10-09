import { movies } from './movies.ts';
// [string, string, string, string, string[], string][]
console.log(movies[0]);

const inputMovie = document.querySelector('#inputMovie') as HTMLInputElement;
const btnSearch = document.querySelector('#btnSearch') as HTMLInputElement;
const btnYearUp = document.querySelector('#btnYearUp') as HTMLInputElement;
const btnYearDown = document.querySelector('#btnYearDown') as HTMLInputElement;
const btnBestRate = document.querySelector('#btnBestRate') as HTMLInputElement;
const showMovies = document.querySelector('#showMovies') as HTMLElement;

console.log(inputMovie, btnSearch, btnYearUp, btnYearDown, btnBestRate, showMovies);

// let count: number = 0;
// const addMovies = (movieArr: [string, string, string, string, string[], string]) => {
//   showMovies.innerHTML += `
  // <article id="id${count}">
  //   <h3>${movieArr[0]}</h3>
  //   <p>${movieArr[1]}</p>
  //   <p>${movieArr[2]}</p>
  //   <p>${movieArr[3]}</p>
  //   <p>${movieArr[4][0]}</p>
  //   <p>${movieArr[4][1]}</p>
  //   <p>${movieArr[5]}</p>
  // </article>
// `;
// };

// movies.forEach((movie) => {
//   addMovies(movie);
//   count++;
// });

function renderMovies(movies: [string, string, string, string, string[], string][]) {
  if (showMovies) {
    showMovies.innerHTML = "";
    let countId: number = 0;
    movies.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.className = "movie";
      movieElement.innerHTML = `
        <article id="id${countId}">
          <h3>${movie[0]}</h3>
          <p>${movie[1]}</p>
          <p>${movie[2]}</p>
          <p>${movie[3]}</p>
          <p>${movie[4][0]}</p>
          <p>${movie[4][1]}</p>
          <p>${movie[5]}</p>
        </article>
      `;
      showMovies.appendChild(movieElement);
      countId++;
    });
  }
}
renderMovies(movies);

btnSearch.addEventListener('click', () => {
  const movieName = inputMovie.value.toLowerCase();
  movies.filter((movie) => {
    const movieLowerCase = movie[0].toLowerCase();
    const movieArticle = document.querySelector(`#id${movies.indexOf(movie)}`) as HTMLElement;
    if(movieLowerCase.includes(movieName)) {
      movieArticle.style.display = 'block';
    } else {
      movieArticle.style.display = 'none';
    };
  });
});

btnYearUp.addEventListener('click', () => {
  const yearUpMovies = movies.toSorted((a, b) => parseInt(a[1]) - parseInt(b[1]));
  renderMovies(yearUpMovies);
});

btnYearDown.addEventListener('click', () => {
  const yearUpMovies = movies.toSorted((a, b) => parseInt(b[1]) - parseInt(a[1]));
  renderMovies(yearUpMovies);
});

btnBestRate.addEventListener('click', () => {
  const yearUpMovies = movies.toSorted((a, b) => parseInt(b[5]) - parseInt(a[5]));
  renderMovies(yearUpMovies);
});