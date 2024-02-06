import environment from "env/environment";

let variables = {};

switch (environment) {
  case "production": variables = require("./variables/production"); break;
  case "dev": variables = require("./variables/dev"); break;
  case "local": variables = require("./variables/local"); break;
  default: variables = require("./variables/local"); break;
}

export default variables;