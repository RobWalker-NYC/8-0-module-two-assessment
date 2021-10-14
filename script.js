fetch("https://ghibliapi.herokuapp.com/films")
.then((res) => {
    return res.json();
    console.log("title");

})
.then((movies) => {
    console.log(movies);

// let dropDown = document.querySelector("#dropdown")
// for(let movie of movies)
//      let option = document.createElement("option");
//      option.setAttribute("value", movie.title);
//      option.textContent = movie.title;
//     //  option.value = movie.title;
//      dropDown.append(option);

// dropDown.addEventListener("change", (e) => {

// });



}).catch((err) => {
console.log(err);
});