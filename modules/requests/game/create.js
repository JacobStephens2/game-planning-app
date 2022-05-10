import { cookieMethods } from "/modules/exports/cookieMethods.js";
import { apiHostname } from '/modules/exports/apiHostname.js';
import { handleErrors } from '/modules/exports/handleErrors.js';
import { updateUIError } from '/modules/exports/updateUIError.js';

if (cookieMethods.getCookie('loggedIn') == 'true') {
} else {
  window.location = '/login';
}

// Create on Create button click
document.querySelector('input[type="submit"]').addEventListener('click', function (event) {
  event.preventDefault()
  let data = {};
  data.title = document.querySelector('input#title').value;

  const updateUISuccess = function (data) {
    const parsedData = JSON.parse(data);
    window.location = '/games/read';
  }

  let endpoint = apiHostname + '/game/create';

  var formdata = new FormData();
  formdata.append("game[title]", document.querySelector('input#title').value);

  var requestOptions = {
    method: 'POST',
    credentials: 'include',
    body: formdata,
    redirect: 'follow'
  };

  fetch(endpoint, requestOptions)
    .then(response => handleErrors(response))
    .then((data) => updateUISuccess(data))
    .catch((error) => updateUIError(error));

});