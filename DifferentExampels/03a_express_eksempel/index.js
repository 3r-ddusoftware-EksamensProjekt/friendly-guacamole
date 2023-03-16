const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
    .set("view engine", "ejs")
    .set("views", path.join(__dirname, "views"))
    .use(express.static(path.join(__dirname, "public")))
    .get("/route1", (req,res) => res.render("pages/example1.ejs"))
    .get("/route2", (req,res) => res.render("pages/example2.ejs"))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
