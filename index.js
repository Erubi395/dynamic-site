const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const news = require("./lib/news");

const app = express();

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// public folder
app.use(express.static("public"));

// Enable Layouts
app.use(expressLayouts);
app.set("layout", "layouts/main");

// Routes
app.get("/", (req, res) => {
  res.render("pages/home", { title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { title: "About Page" });
});

app.get("/school", (req, res) => {
  res.render("pages/school", { title: "School Page" });
});

app.get("/3d", (req, res) => {
  res.render("pages/3d", { title: "3D Page" });
});
app.get("/career", (req, res) => {
  res.render("pages/career", { title: "Career Page" });
});

app.get("/news1", (req, res) => {
  res.render("pages/news1", { title: "News1 Page" });
});

app.get("/news2", (req, res) => {
  res.render("pages/news2", { title: "News2 Page" });
});

app.get("/news/:id", (req, res) => {
  const newsId = parseInt(req.params.id);
  const newsItem = news.find((item) => item.id === newsId);

  if (!newsItem) {
    return res.status(404).send("News not found");
  }

  res.render("pages/news", {
    title: newsItem.title,
    description: newsItem.description,
    newsList: news,
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
