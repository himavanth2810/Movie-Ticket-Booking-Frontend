const createMovieButton = document.querySelector(".add-movie-button");

const apiUrl = "http://localhost:8000";

const token = localStorage.getItem("jwt");

createMovieButton.addEventListener("click", () => {
  const title = document.querySelector(".add-movie-title").value;
  const language = document.querySelector(".add-movie-language").value;
  const description = document.querySelector(".add-movie-description").value;
  

  if (token) {
    fetch(`${apiUrl}/auth/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ title, language, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          location.href = "/Movie Page/movie.html";
        }
      })
      .catch((err) => {
        alert("Error Adding Movie!! Re-try....");
        console.log(err);
      });
  }
});