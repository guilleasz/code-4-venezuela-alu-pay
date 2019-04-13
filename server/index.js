const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const { setHeaders } = require('./config/axios');
const https = require("https");
const http = require("http");
const fs = require("fs");
const options = {
  key: fs.readFileSync("./client-key.pem"),
  cert: fs.readFileSync("./client-cert.pem")
};
const app = express();

app.use(bodyParser.json());
app.use(setHeaders)
app.use(routes);

// Create an HTTP service.
http
  .createServer(app)
  .listen(3001, () => console.log("HTTP API LISTENING AT PORT 3001"));
// Create an HTTPS service identical to the HTTP service.
https
  .createServer(options, app)
  .listen(3002, () => console.log("HTTPS API LISTENING AT PORT 3002"));
