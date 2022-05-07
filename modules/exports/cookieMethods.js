const cookieMethods = (function () {

  // These methods are from https://www.w3schools.com/js/js_cookies.asp

  // The object interface module structure is from:
  // https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/

  return {

    setCookie: function (cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },

    getCookie: function (cname) {
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
    },

    checkCookie: function () {
      let username = getCookie("username");
      if (username != "") {
        alert("Welcome again " + username);
      } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
          setCookie("username", username, 365);
        }
      }
    }

  }

})();

export { cookieMethods };