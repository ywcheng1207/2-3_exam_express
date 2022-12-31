// require packages used in the project
const express = require("express");
const app = express();
const port = 3000;

// require express-handlebars here
const exphbs = require("express-handlebars");

// setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting static files
app.use(express.static("public"));

// routes setting
app.get("/", (req, res) => {
  const main = {
    content: "首頁",
  };
  res.render("index", { exam: main });
});

app.get("/:page", (req, res) => {
  const thePage = {
    content: req.params.page,
  };
  res.render("show", { exam: thePage });
});

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
