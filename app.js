const express = require("express");
require("dotenv").config();
const logger = require("./logger");
const PORT = process.env.PORT;
const app = express();
const pinoHTTP = require("pino-http");
const answerController = require("./controller/answerController");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/static"));
app.use(pinoHTTP());

app.get("/", answerController);

app.listen(PORT, () => {
  logger.info("Server started");
  console.log(`Express app running on port ${PORT}`);
});
