import { cookieMethods } from "/modules/exports/cookieMethods.js";
import { logout } from "/modules/requests/logout.js";

if (cookieMethods.getCookie('loggedIn') == 'true') {
  // Menu when logged in
  document.querySelector('nav').innerHTML = `
  <a href="/">Game Planning App</a>
  <a href="/views/games/read">Games</a>
  `;
  let button = document.createElement('button');
  button.innerText = 'Logout';
  button.onclick = logout;
  document.querySelector('nav').append(button);

} else {
  // Menu when logged out
  document.querySelector('nav').innerHTML = `
  <a href="/">Game Planning App</a>
  <a href="/views/sign-up">Sign Up</a>
  <a href="/views/login">Login</a>
  `;
}