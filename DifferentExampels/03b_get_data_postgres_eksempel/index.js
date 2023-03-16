const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 5000;
const get_data = require("./routes/get_data.js")

express()
    .use(express.static(path.join(__dirname, "public")))
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "ejs")
    .use("/data",get_data)
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
