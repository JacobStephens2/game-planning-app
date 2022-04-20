import { apiHostname } from '/modules/apiHostname.js';

let signUpEndpoint = apiHostname + 'sign-up.php';

document.querySelector('input[type="submit"]').addEventListener('click', function (event) {
  event.preventDefault()
  let data = {};
  data.email = document.querySelector('input[type="email"]').value;
  data.password = document.querySelector('input[type="password"]').value;

  function appendToPage(data) {
    let paragraph = document.createElement('p');
    paragraph.innerText = data;
    document.querySelector('body').append(paragraph);
    console.log('appendToPage() run with data: ' + data);
  }

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

  appendToPage(data.message);

});
