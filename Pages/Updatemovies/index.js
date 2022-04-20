const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("movieId");

console.log(movieId);

const updateMovieButton = document.querySelector(".update-movie-button");
const deleteMovieButton = document.querySelector(".delete-movie-button");

const apiUrl = "http://localhost:8000";

const token = localStorage.getItem("jwt");

let Movietitle = document.querySelector(".update-movie-title");
let Movielanguage = document.querySelector(".update-movie-language");
let Moviedescription = document.querySelector(".update-movie-description");

window.addEventListener("load",  () => {
  fetch(`${apiUrl}/auth/update/${movieId}`, {
      method: "GET",
      headers: {
          authorization: token,
      }

  }).then((data) => {
      return data.text()
  }).then((result) => {
      const array = JSON.parse(result)
      Movietitle.value = array[0].title;
      Movielanguage.value = array[0].language;
      Moviedescription.value = array[0].description;
  })
})

updateMovieButton.addEventListener("click", () => {
  const description = Moviedescription.value;
  const title = Movietitle.value;
  const language = Movielanguage.value;

  if (token) {
    fetch(`${apiUrl}/auth/update/${movieId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ title, description, language }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          location.href = "/Movie Page/movie.html";
        }
      })
      .catch((err) => {
        alert("Error Updating Movie!! Re-try....");
        console.log(err);
      });
  }
});

deleteMovieButton.addEventListener("click", () => {
  if (token) {
    fetch(`${apiUrl}/auth/delete/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          location.href = "/Movie Page/movie.html";
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error Deleting Movie!! Re-try....");
      });
  }
});