const body = document.querySelector("body");

const header1 = document.createElement("h1");
var node = document.createTextNode("Login");
header1.appendChild(node);
body.appendChild(header1);

var form = document.createElement("form");
body.appendChild(form);
const LoginForm = document.querySelector("form");

const input = document.createElement("input");
for (let index = 0; index < 2; index++) {
  console.log([index]);
  LoginForm.append(input);
}
