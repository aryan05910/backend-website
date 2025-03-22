const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
    res.send("Backend is running!");
});


