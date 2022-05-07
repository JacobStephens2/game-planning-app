import { apiHostname } from '/modules/apiHostname.js';
import { handleErrors } from '/modules/handleErrors.js';
import { updateUIError } from '/modules/updateUIError.js';

let endpoint = apiHostname + '/test/database';

const updateUISuccess = function (data) {
  const parsedData = JSON.parse(data);
  var value = parsedData.value;
  document.querySelector("#database").innerText = value;
  return value;
};

const createRequest = function (url, succeed, fail) {
  fetch(url)
    .then((response) => handleErrors(response))
    .then((data) => succeed(data))
    .catch((error) => fail(error));
};

createRequest(endpoint, updateUISuccess, updateUIError);
