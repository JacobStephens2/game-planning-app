import { cookieMethods } from "./cookieMethods";
import { apiHostname } from '/modules/apiHostname.js';
import { handleErrors } from '/modules/handleErrors.js';
import { updateUIError } from '/modules/updateUIError.js';

if (cookieMethods.getCookie('loggedIn') == 'true') {
  console.log('You are logged in');
} else {
  window.location = '/login';
}

let signUpEndpoint = apiHostname + 'access';

const createRequest = function (url, succeed, fail) {
  fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => handleErrors(response))
    .then((data) => succeed(data))
    .catch((error) => fail(error));
};

const updateUISuccess = function (data) {
  const parsedData = JSON.parse(data);
  document.querySelector('span+span').innerText = parsedData.email;
}

createRequest(signUpEndpoint, updateUISuccess, updateUIError);
