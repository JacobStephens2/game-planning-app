function Request() {
  // localDevelopment:
  // set to 1 for local development environment
  // set to 0 for production environment
  const localDevelopment = 1;

  // For production site
  if (localDevelopment === 1) {
    var baseURL = "http://localhost:4000/api/";
    var url = baseURL + "data.php";
  } else {
    var baseURL =
      "http://ec2-184-73-147-183.compute-1.amazonaws.com/back-end/api/";
    var url = baseURL + "data.php";
  }

  const body = document.querySelector("body");

  const updateUISuccess = function (data) {
    const parsedData = JSON.parse(data);
    var name = parsedData.name;
    body.innerText = name;
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

Request();
