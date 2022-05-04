import { cookieMethods } from "./cookieMethods";

if (cookieMethods.getCookie('loggedIn') == 'true') {
  function logout() {
    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location = "/views/login.html";
  }
  document.querySelector('nav').innerHTML = `
  <a href="/index.html">Game Planning App</a>
  <a href="/views/games.html">Games</a>
  `;
  let button = document.createElement('button');
  button.innerText = 'Logout';
  button.onclick = logout;
  document.querySelector('nav').append(button);

} else {
  document.querySelector('nav').innerHTML = `
  <a href="/index.html">Game Planning App</a>
  <a href="/views/sign-up.html">Sign Up</a>
  <a href="/views/login.html">Login</a>
  `;
}