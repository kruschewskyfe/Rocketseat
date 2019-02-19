const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

const checkAgeMiddleware = (req, res, next) => {
  const { age } = req.query;

  return !age ? res.redirect("/") : next();
};

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "njk");

app.get("/", (req, res) => {
  return res.render("home");
});

app.get("/major", checkAgeMiddleware, (req, res) => {
  return res.send(`Você é maior de idade e possui ${req.query.age} anos.`);
});

app.get("/minor", checkAgeMiddleware, (req, res) => {
  return res.send(`Você é menor de idade e possui ${req.query.age} anos.`);
});

app.post("/check", (req, res) => {
  return req.body.age >= 18
    ? res.redirect(`/major/?age=${req.body.age}`)
    : res.redirect(`/minor/?age=${req.body.age}`);
});

app.listen(3000);
