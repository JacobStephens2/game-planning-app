import { apiHostname } from '/modules/apiHostname.js';

let signUpEndpoint = apiHostname + 'sign-up.php';

document.querySelector('input[type="submit"]').addEventListener('click', function (event) {
  event.preventDefault()
  let email = document.querySelector('input[type="email"]').value;
  let password = document.querySelector('input[type="password"]').value;
  let data = {};
  data.email = email;
  data.password = password;
  fetch(signUpEndpoint, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});
