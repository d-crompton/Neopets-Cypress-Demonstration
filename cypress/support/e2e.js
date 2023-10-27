// Import commands.js using ES2015 syntax:
import "./commands";
import { login } from "./login";

// Code to run before every test
before(() => {
  login();
});

// after(() => {
//   // Code to run after every test
// });
