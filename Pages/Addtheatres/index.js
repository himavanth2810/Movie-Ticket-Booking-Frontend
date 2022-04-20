const createTheatreButton = document.querySelector(".add-theatre-button");

const apiUrl = "http://localhost:8000";

const token = localStorage.getItem("jwt");

createMovieButton.addEventListener("click", () => {
  const city = document.querySelector(".add-theatre-city").value;
  const theatreName = document.querySelector(".add-theatre-name").value;
  

  if (token) {
    fetch(`${apiUrl}/auth/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ city, theatreName }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert("Theatre Added successfully!");
        }
      })
      .catch((err) => {
        alert("Error Adding Theatre!! Re-try....");
        console.log(err);
      });
  }
});