const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.listen(3001, () => console.log("API LISTENING AT PORT 3001"));
