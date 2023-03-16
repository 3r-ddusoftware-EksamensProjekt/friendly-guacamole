const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgres://user:password@hostname/db"
});

// EXAMPLE 0
router.get("/", function (req, res) {
    res.send("Get data from DB example - no root site... :[");
});

// EXAMPLE 1 - Get all departments
router.get("/all_dept", async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM departments");
        const results = { results: result ? result.rows : null };
        res.render("pages/all_dept", results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

// EXAMPLE 2 - Get all employees named Valery
router.get("/valery", async (req, res) => {
    const query = {
        text: "SELECT * FROM employees WHERE first_name = $1",
        values: ["Valery"],
    };
    const client = await pool.connect();
    client
        .query(query)
        .then((result) => {
            results = { results: result ? result.rows : null };
            res.render("pages/valery", results);
        })
        .catch((err) => {
            console.error(err);
            res.send("Error " + err);
        })
        .finally(() => client.release());
});

// EXAMPLE 3 - Get first name of all employees in department 007
router.get("/dept_007", async (req, res) => {
    const query = {
        text: "SELECT employees.first_name, dept_emp.dept_no FROM dept_emp JOIN employees ON employees.emp_no = dept_emp.emp_no WHERE dept_emp.dept_no = $1",
        values: ["d007"],
    };
    const client = await pool.connect();
    client
        .query(query)
        .then((result) => {
            results = { results: result ? result.rows : null };
            res.render("pages/dept_007", results);
        })
        .catch((err) => {
            console.error(err);
            res.send("Error " + err);
        })
        .finally(() => client.release());
});

module.exports = router;
