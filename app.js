const express = require("express");

const app = express();
app.set("view engine", "ejs");

const port = 3000;

app.get("/", (req, res) => {
  const ans = "No";
  res.render("pages/index", {
    ans,
  });
});

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});
