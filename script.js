fetch("https://ghibliapi.herokuapp.com/films")
.then((res) => {
    return res.json();

})
.then((movies) => {
    console.log(movies);

let dropDown = document.querySelector("#dropdown")

for(let movie of movies) {
     let option = document.createElement("option");
     option.setAttribute("value", movie.title);
     option.textContent = movie.title;
     dropDown.append(option);
}

let title = document.querySelector("title");
const year = document.querySelector("year");
const description = document.querySelector("description");

let selectedMovie

dropDown.addEventListener("change", () => {
    for(let movie of movies) {
    if(dropDown.value === movie.title) {
        selectedMovie = movie;
        console.log(movie);
        year.textContent = movie.year;
        description.textContent = movie.description;
    }
  }
});


}).catch((err) => {
console.log(err);
});