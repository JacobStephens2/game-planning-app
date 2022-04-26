function logout() {
  document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location = "/views/login.html";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

if (getCookie('loggedIn') == 'true') {
  document.querySelector('nav').innerHTML = `
  <a href="/index.html">Game Planning App</a>
  <a href="/views/games.html">Games</a>
  <button onclick="logout()">Logout</a>
  `;
} else {
  document.querySelector('nav').innerHTML = `
  <a href="/index.html">Game Planning App</a>
  <a href="/views/sign-up.html">Sign Up</a>
  <a href="/views/login.html">Login</a>
  `;
}