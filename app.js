const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  const ans = "No";
  res.render("pages/index", {
    ans,
  });
});

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
