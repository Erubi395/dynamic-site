const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

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
  res.render("pages/3d", { title: "3d Page" });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
