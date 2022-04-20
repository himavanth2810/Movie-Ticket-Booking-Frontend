const urlParams = new URLSearchParams(window.location.search);
const theatreId = urlParams.get("theatreId");

console.log(theatreId);

const updateTheatreButton = document.querySelector(".update-theatre-button");
const deleteTheatreButton = document.querySelector(".delete-theatre-button");

const apiUrl = "http://localhost:8000";

const token = localStorage.getItem("jwt");

let Theatrecity = document.querySelector(".update-theatre-city");
let Theatrename = document.querySelector(".update-theatre-name");

window.addEventListener("load",  () => {
  fetch(`${apiUrl}/auth/update/${theatreId}`, {
      method: "GET",
      headers: {
          authorization: token,
      }

  }).then((data) => {
      return data.text()
  }).then((result) => {
      const array = JSON.parse(result)
      Theatrecity.value = array[0].city;
      Theatrename.value = array[0].name;
  })
})

updateTheatreButton.addEventListener("click", () => {
  const city = Theatrecity.value;
  const theatreName = Theatrename.value;

  if (token) {
    fetch(`${apiUrl}/auth/update/${TheatreId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ city, theatreName }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert("Updated Theatre!");
        }
      })
      .catch((err) => {
        alert("Error Updating Theatre!! Re-try....");
        console.log(err);
      });
  }
});

deleteTheatreButton.addEventListener("click", () => {
  if (token) {
    fetch(`${apiUrl}/auth/delete/${theatreId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert("Theatre Deleted successfully !");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error Deleting Theatre!! Re-try....");
      });
  }
});