const body = document.querySelector("body");

const header1 = document.createElement("h1");
var node = document.createTextNode("Login");
header1.appendChild(node);
body.appendChild(header1);

var form = document.createElement("form");
body.appendChild(form);
const LoginForm = document.querySelector("form");

for (let i = 0; i < 2; i++) {
  const input = [];
  input[i] = document.createElement("input");
  LoginForm.append(input[i]);
}
