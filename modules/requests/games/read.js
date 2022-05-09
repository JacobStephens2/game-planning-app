import { cookieMethods } from "/modules/exports/cookieMethods.js";
import { apiHostname } from '/modules/exports/apiHostname.js';
import { handleErrors } from '/modules/exports/handleErrors.js';
import { updateUIError } from '/modules/exports/updateUIError.js';

if (cookieMethods.getCookie('loggedIn') == 'true') {
} else {
  window.location = '/views/login';
}

let endpoint = apiHostname + '/games/read';

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
  for (let i in parsedData) {
    let li = document.createElement('li');
    li.innerHTML =
      `<a href="views/game/edit?id=${parsedData[i].id}">` +
      parsedData[i].title +
      `</a>`;
    document.querySelector('ul').append(li);
  }
}

createRequest(endpoint, updateUISuccess, updateUIError);
