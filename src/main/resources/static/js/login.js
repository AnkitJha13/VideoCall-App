// Define the base URL once at the top
const baseURL = 'https://videocall-app-dusv.onrender.com';

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    email: email,
    password: password
  };

  // Use the baseURL for the login API
  fetch(`${baseURL}/api/v1/users/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      if (!response.ok) {
        alert("Login and / or password is incorrect");
      }
      return response.json();
    })
    .then((response) => {
      localStorage.setItem("connectedUser", JSON.stringify(response));
      window.location.href = "index.html";
    })
    .catch(error => {
      console.error("POST request Error", error);
    });
}

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", handleLogin);
