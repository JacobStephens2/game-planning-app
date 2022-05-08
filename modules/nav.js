import { cookieMethods } from "/modules/exports/cookieMethods.js";

if (cookieMethods.getCookie('loggedIn') == 'true') {
  // Menu when logged in
  function logout() {
    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location = "/login";
  }
  document.querySelector('nav').innerHTML = `
  <a href="/">Game Planning App</a>
  <a href="/test/access">Access</a>
  <a href="/games/read">Games</a>
  `;
  let button = document.createElement('button');
  button.innerText = 'Logout';
  button.onclick = logout;
  document.querySelector('nav').append(button);

} else {
  // Menu when logged out
  document.querySelector('nav').innerHTML = `
  <a href="/index">Game Planning App</a>
  <a href="/sign-up">Sign Up</a>
  <a href="/login">Login</a>
  `;
}