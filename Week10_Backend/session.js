// Exercise 1
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hey from my backend!");
});

app.get("/currentYear", (req, res) => {
  const currentYear = new Date().getFullYear();
  res.json({ year: currentYear });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Exercise 2
import knex from "knex";

// Подключение к базе данных SQLite
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./tasks.sqlite3",
  },
  useNullAsDefault: true,
});

app.get("/", (req, res) => {
  res.send("Hello from exercise 2 with correct schema!");
});

app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM user ORDER BY id ASC;");
  res.json(rows);
});

app.get("/gmail-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM user WHERE email LIKE '%@gmail.com';",
  );
  res.json(rows);
});

app.get("/user-count", async (req, res) => {
  const result = await knexInstance.raw("SELECT COUNT(*) as count FROM user;");
  res.json(result[0]);
});

app.get("/first-user", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM user ORDER BY id ASC LIMIT 1;",
  );
  if (rows.length === 0) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(rows[0]);
});

app.get("/all-tasks", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM task ORDER BY id ASC;");
  res.json(rows);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
