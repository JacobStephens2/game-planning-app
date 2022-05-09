import { apiHostname } from '/modules/exports/apiHostname.js';
import { handleErrors } from '/modules/exports/handleErrors.js';
import { updateUIError } from '/modules/exports/updateUIError.js';

if (cookieMethods.getCookie('loggedIn') == 'true') {
} else {
  window.location = '/views/login';
}

// Read data on page load
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');

const updateUISuccess = function (data) {
  const parsedData = JSON.parse(data);
  document.querySelector('h1').innerText = "Are you sure you want to delete " + parsedData.title + "?";
  document.querySelector('title').innerText = "Delete " + parsedData.title;
}

let readEndpoint = apiHostname + '/game/read?id=' + id;

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(readEndpoint, requestOptions, updateUIError)
  .then(response => handleErrors(response))
  .then((data) => updateUISuccess(data))
  .catch(error => console.log('error', error));

// Delete on Delete button click
document.querySelector('input[type="submit"]').addEventListener('click', function (event) {
  event.preventDefault()
  let deleteEndpoint = apiHostname + '/game/delete?id=' + id;

  const updateWithResponse = function (data) {
    const parsedData = JSON.parse(data);
    document.querySelector('#message').innerText = parsedData.message;
    document.querySelector('h1').innerText = "Deleted " + parsedData.title;
    document.querySelector('title').innerText = "Deleted " + parsedData.title;
    window.location = '/views/games/read?message=' + encodeURIComponent('Deleted ') + encodeURIComponent(parsedData.title);
  }

  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };

  fetch(deleteEndpoint, requestOptions)
    .then(response => handleErrors(response))
    .then((data) => updateWithResponse(data))
    .catch((error) => updateUIError(error));

});