// app.js
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const salary = require("./routes/salary.js");
express()
  .use(express.static(path.join(__dirname, "public")))
  .use("/salary", salary)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
