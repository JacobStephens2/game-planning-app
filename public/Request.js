function Request(endPoint) {
  if (window.location.host === "gameplanning.site") {
    var baseURL = "https://api.gameplanning.site/";
    var url = baseURL + endPoint + ".php";
  } else {
    var baseURL = "http://api.gameplanning.local/";
    var url = baseURL + endPoint + ".php";
  }

  var targetElement = "#" + endPoint;
  var parentElement = document.querySelector(targetElement);

  const updateUISuccess = function (data) {
    const parsedData = JSON.parse(data);
    var value = parsedData.value;
    parentElement.innerText = value;
    return value;
  };

  const updateUIError = function (error) {
    console.log(error);
    return error;
  };

  const handleErrors = function (response) {
    if (!response.ok) {
      throw response.status + ": " + response.statusText;
    }
    return response.text();
  };

  const createRequest = function (url, succeed, fail) {
    fetch(url)
      .then((response) => handleErrors(response))
      .then((data) => succeed(data))
      .catch((error) => fail(error));
  };

  createRequest(url, updateUISuccess, updateUIError);
}
