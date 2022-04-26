function logout() {
  localStorage.removeItem('loggedIn');
  window.location = window.location;
}

if (localStorage.getItem('loggedIn') == 'true') {
  document.querySelector('nav').innerHTML = `
  <a href="/index.html">Game Planning App</a>
  <button onclick="logout()">Logout</a>
  `;
} else {
  document.querySelector('nav').innerHTML = `
  <a href="/index.html">Game Planning App</a>
  <a href="/views/sign-up.html">Sign Up</a>
  <a href="/views/login.html">Login</a>
  `;
}