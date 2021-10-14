fetch("https://ghibliapi.herokuapp.com/films")
.then((res) => {
    return res.json();
    console.log("title");

})
.then((movies) => {
    console.log(movies);

// let dropdown = document.querySelector('#dropdown')
// for(let movie of movies)
//      let option = document.createElement("option");
//     //  option.setAttribute("value", movie.title);
//      option.textContent = movie.title;
//      option.value = movie.title;
//      dropdown.append(option);

// dropdown.addEventListener("change", (e) => {

// });



}).catch((err) => {
console.log(err);
});