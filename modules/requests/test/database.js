import { apiHostname } from '/modules/exports/apiHostname.js';
import { handleErrors } from '/modules/exports/handleErrors.js';
import { updateUIError } from '/modules/exports/updateUIError.js';

let endpoint = apiHostname + '/test/database';

const updateUISuccess = function (data) {
  const parsedData = JSON.parse(data);
  var value = parsedData.value;
  document.querySelector('span').innerText = value;
  return value;
};

const createRequest = function (url, succeed, fail) {
  fetch(url)
    .then((response) => handleErrors(response))
    .then((data) => succeed(data))
    .catch((error) => fail(error));
};

createRequest(endpoint, updateUISuccess, updateUIError);
