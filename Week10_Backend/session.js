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

const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,
});

app.get("/", (req, res) => {
  res.send("Hello from exercise 2!");
});

app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});

app.get("/unconfirmed-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE confirmed_at IS NULL;",
  );
  res.json(rows);
});

app.get("/gmail-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE email LIKE '%@gmail.com';",
  );
  res.json(rows);
});

app.get("/2022-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE strftime('%Y', created_at) = '2022';",
  );
  res.json(rows);
});

app.get("/user-count", async (req, res) => {
  const result = await knexInstance.raw("SELECT COUNT(*) as count FROM users;");
  res.json(result[0]);
});

app.get("/last-name-count", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT last_name, COUNT(*) as count FROM users GROUP BY last_name ORDER BY last_name ASC;",
  );
  res.json(rows);
});

app.get("/first-user", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users ORDER BY id ASC LIMIT 1;",
  );
  if (rows.length === 0) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(rows[0]);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
