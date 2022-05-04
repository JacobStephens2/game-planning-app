import { cookieMethods } from "./cookieMethods";

if (cookieMethods.getCookie('loggedIn')) {
  console.log('logged in');
} else {
  console.log('not logged in');
}