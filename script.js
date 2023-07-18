const inputName = document.querySelector("input");
const search = document.querySelector("button");
const title = document.querySelector("h3");

const getData = async () => {
  const response = await fetch(
    `https://www.omdbapi.com/?t=$${inputName.value}&apikey=426d12c8`
  );
  const movie = await response.json();
  console.log(movie);
  title.innerHTML = movie.Title;
};

search.addEventListener("click", () => {
  getData();
});
