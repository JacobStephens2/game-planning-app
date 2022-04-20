import { apiHostname } from '/modules/apiHostname.js';
import { handleErrors } from '/modules/handleErrors.js';
import { updateUIError } from '/modules/updateUIError.js';

let signUpEndpoint = apiHostname + 'sign-up.php';

document.querySelector('input[type="submit"]').addEventListener('click', function (event) {
  event.preventDefault()
  let data = {};
  data.email = document.querySelector('input[type="email"]').value;
  data.password = document.querySelector('input[type="password"]').value;

  const updateUISuccess = function (data) {
    const parsedData = JSON.parse(data);
    var message = parsedData.message;
    let paragraph = document.createElement('p');
    paragraph.innerText = parsedData;
    document.querySelector('body').append(paragraph);
  }

  const createRequest = function (url, succeed, fail) {
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then((response) => handleErrors(response))
      .then((data) => succeed(data))
      .catch((error) => fail(error));
  };

  createRequest(signUpEndpoint, updateUISuccess, updateUIError);

});
