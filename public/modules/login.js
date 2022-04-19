import { apiHostname } from '/modules/apiHostname.js';
import { handleErrors } from '/modules/handleErrors.js';

document.querySelector('input[type="submit"]').addEventListener('click', function (event) {
  event.preventDefault()
});

let requestURL = apiHostname + 'login.php';

const createRequest = function (url, succeed, fail) {
  fetch(url)
    .then(response => handleErrors(response))
    .then(data => succeed(data))
    .catch(error => fail(error));
};

const updateUISuccess = function (data) {
  console.log(JSON.parse(data));
};

const updateUIError = function (error) {
  console.log(error);
  return error;
};

createRequest(requestURL, updateUISuccess, updateUIError);