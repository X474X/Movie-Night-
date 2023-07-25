const inputName = document.querySelector("input");
const search = document.querySelector("button");
const title = document.querySelector("h3");
const year = document.querySelector(".year");
const rating = document.querySelector(".rating");
const descriere = document.querySelector("p");
const poster = document.querySelector("img");

const getData = async () => {
  const response = await fetch(
    `https://www.omdbapi.com/?t=$${inputName.value}&apikey=426d12c8`
  );
  const movie = await response.json();
  console.log(movie);
  title.innerHTML = movie.Title;
  year.innerHTML = movie.Year;
  rating.innerHTML = movie.imdbRating + "/10";
  descriere.innerHTML = movie.Plot;
  poster.src = movie.Poster;
};

search.addEventListener("click", () => {
  getData();
});

console.log(poster);
