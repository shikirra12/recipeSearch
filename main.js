let recipes = document.querySelectorAll(".recipes");
let searchterm = document.getElementById("button");
let input = document.getElementById('field');



searchterm.addEventListener("click", function (a) {
  fetch(`https://recipepuppyproxy.herokuapp.com/api/?q=${input.value}`)
  .then(
    function (response) {
      if(response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function (data) {
        displayOne(data);
        console.log("Here's the data:", data);
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
  // a.preventDefault();
})

function displayOne(data) {
  for (var i = 0; i < data.results.length; i++) {
    let template = ``;

    template +=
    `
    <img src="${data.results[i].thumbnail}">
    <h3>${data.results[i].title}</h3>
    <a href="${data.results[i].href}">Recipe</a>
    `;
    recipes[i].innerHTML = template;
  }
}
