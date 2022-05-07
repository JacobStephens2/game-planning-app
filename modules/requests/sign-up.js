import { apiHostname } from '/modules/exports/apiHostname.js';
import { handleErrors } from '/modules/exports/handleErrors.js';
import { updateUIError } from '/modules/exports/updateUIError.js';

let signUpEndpoint = apiHostname + '/sign-up';

document.querySelector('input[type="submit"]').addEventListener('click', function (event) {
  event.preventDefault()
  let data = {};
  data.email = document.querySelector('input[type="email"]').value;
  data.password = document.querySelector('input[type="password"]').value;

  const updateUISuccess = function (data) {
    const parsedData = JSON.parse(data);
    document.querySelector('form+p').innerText = parsedData.message;
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
