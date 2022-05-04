import { cookieMethods } from "./cookieMethods";

if (!cookieMethods.getCookie('loggedIn')) {
  window.location;
} else {
  console.log('logged in');
}