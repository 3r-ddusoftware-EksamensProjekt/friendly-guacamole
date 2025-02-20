const express = require("express");
const router = express.Router();
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: "postgres://postgres:Lilo2003@localhost/salaries",
});
// Route /all
router.get("/all", async (req, res) => {
  try {
    // Wait for DB connection
    const client = await pool.connect();
    // Run query
    const result = await client.query("SELECT * FROM salaries");
    // Respond with DB results as json
    if (result) res.json({ salaries: result.rows });
    else res.json({ salaries: null });
    // Release connection
    client.release();
  } catch (err) {
    // Report errors
    console.error(err);
    res.send("Error " + err);
  }
});
module.exports = router;
