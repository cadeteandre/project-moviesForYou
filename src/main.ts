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

function renderMovies(movies: [string, string, string, string, string[], string][]) {
  if (showMovies) {
    showMovies.innerHTML = "";
    let countId: number = 0;
    movies.forEach((movie: [string, string, string, string, string[], string]) => {
      const movieElement = document.createElement("div");
      movieElement.innerHTML = `
        <article id="id${countId}">
          <h3>${movie[0]}</h3>
          <p>${movie[1]}</p>
          <p>${movie[2]}</p>
          <p>${movie[3]}</p>
          <div>${movie[4].map((genre) => `<p>${genre}</p>`).join("")}</div>
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
  const yearDownMovies = movies.toSorted((a, b) => parseInt(b[1]) - parseInt(a[1]));
  renderMovies(yearDownMovies);
});

btnBestRate.addEventListener('click', () => {
  const rateMovies = movies.toSorted((a, b) => parseInt(b[5]) - parseInt(a[5]));
  renderMovies(rateMovies);
});

// todo Steffen version:
// const renderMovies = (movieParam: [string, string, string, string, string[], string][]) => {
//   movieParam.forEach((movie) => {
//     console.log(movie);
//     showMovies.innerHTML += `<div>
//     <h2>${movie[0]}</h2>
//     <p>${movie[1]}</p>
//     <p>${movie[2]}</p>
//     <p>${movie[3]}</p>
//     <p>${movie[4]}</p>
//     <div>${movie[4].map((genre) => `<p>${genre}</p>`).join("")}</div>
//     <p>${movie[5]}</p>
//     </div>`;
//   });
// };

// renderMovies(movies);


// todo Steffen search button version:
// ! Viel Besser!!!!
// btnSearch.addEventListener('click', () => {
//   const inputMovieLow = inputMovie.value.toLowerCase();
  
//   const filteredMovies = movies.filter((elt) => {
//     const movieTitleLow = elt[0].toLowerCase();
//     if(movieTitleLow.includes(inputMovieLow)) {
//       return elt;
//     }
//   })
//   renderMovies(filteredMovies);
// });