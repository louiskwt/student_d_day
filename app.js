const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
const pino = require("pino-http")();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/static"));
app.use(pino);

app.get("/", (req, res) => {
  const ans = "No";
  res.status(200).render("pages/index", {
    ans,
  });
});

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
