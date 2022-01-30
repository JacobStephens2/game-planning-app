function Request() {
  // For production site
  // const baseURL =
  //   "http://ec2-184-73-147-183.compute-1.amazonaws.com/back-end/api/";
  // const url = baseURL + "data.php";

  // For local development
  const url = "http://localhost:4000/api/data.php";

  const updateUISuccess = function (data) {
    console.log(data);
    return data;
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

const data = Request();
console.log(data);
