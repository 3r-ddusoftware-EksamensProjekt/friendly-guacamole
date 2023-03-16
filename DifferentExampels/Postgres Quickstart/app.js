const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const data = require("./routes/data.js");   // Load js to insert and get data from db

express()
    .use(express.static(path.join(__dirname, "public")))        // Make files in public folder available
    .use("/data", data)                                         // Use instructions in data.js at url: <your-app-name>.herokuapp.com/data
    .listen(PORT, () => console.log(`Listening on ${PORT}`));   // Start server 
