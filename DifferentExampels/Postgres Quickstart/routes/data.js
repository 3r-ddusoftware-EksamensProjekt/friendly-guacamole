const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

// PostgreSQL "pool" to talk to database
const pool = new Pool({
    connectionString: "postgres://user:password@hostname/db"
});

// DEFINITION TO GET DATA
router.get("/get", async (req, res) => {
    // Wait for database connection
    const client = await pool.connect();

    client
        // Send query to database
        .query("SELECT * FROM example")

        // Handle results
        .then((result) => {
            const results = { results: result ? result.rows : null };
            res.send(results);
        })

        // Handle errors
        .catch((err) => {
            console.error(err);
            res.send("Error " + err);
        })

        // Close connection
        .finally(() => client.release());
});

// DEFINITON TO INSERT DATA 
router.get("/insert", async (req, res) => {
    // Check value in query string
    const query_value = req.query.value;
    if (query_value === undefined) return res.send("Error: Value in query string is not defined.");

    // Prepare query for database
    const query = {
        text: "INSERT INTO example VALUES ($1)",
        values: [query_value],
    };

    // Wait for database connection
    const client = await pool.connect();

    client
        // Send query to database
        .query(query)

        // Handle results (just send ok msg)
        .then(() => {
            res.send("ok");
        })

        // Handle errors
        .catch((err) => {
            console.error(err);
            res.send("Error " + err);
        })

        // Close connection
        .finally(() => client.release());
});

module.exports = router;
