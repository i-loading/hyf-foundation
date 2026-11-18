/*

Assignment 2 link

https://vana20915-6799050.postman.co/workspace/Ivan-Sediakin's-Workspace~43724981-5dcb-41c1-855c-458056730f67/folder/60209870-2bd0b1fd-1179-4a9a-afbe-f423fd95040f?action=share&source=copy-link&creator=60209870

*/

import express from "express";
import knex from "knex";

const app = express();
const port = 3000;

const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,
});

app.get("/", async (req, res) => {
  try {
    const result = await knexInstance.raw(
      "SELECT COUNT(*) as count FROM users;",
    );
    const userCount = result[0].count;

    const htmlResponse = `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>User panel</title>
          <style>
              body {
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background-color: #f0f4f8;
                  color: #333;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  margin: 0;
              }
              .card {
                  background: white;
                  padding: 40px;
                  border-radius: 16px;
                  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
                  text-align: center;
                  max-width: 420px;
                  width: 100%;
              }
              h1 {
                  color: #1e293b;
                  margin-bottom: 8px;
              }
              p {
                  color: #64748b;
                  font-size: 16px;
              }
              .badge {
                  display: inline-block;
                  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                  color: white;
                  font-size: 42px;
                  font-weight: bold;
                  padding: 12px 30px;
                  border-radius: 12px;
                  margin-top: 20px;
                  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
              }
          </style>
      </head>
      <body>
          <div class="card">
              <h1>Welcome!</h1>
              <p>Total registered users:</p>
              <div class="badge">${userCount}</div>
          </div>
      </body>
      </html>
    `;
    res.send(htmlResponse);
  } catch (err) {
    res.status(500).send("Error while fetching data");
  }
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

// 3 NEW ROUTES

app.get("/yahoo-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE email LIKE '%@yahoo.com';",
  );
  res.json(rows);
});

app.get("/confirmed-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE confirmed_at IS NOT NULL;",
  );
  res.json(rows);
});

app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const rows = await knexInstance.raw("SELECT * FROM users WHERE id = ?;", [
    userId,
  ]);

  if (rows.length === 0) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(rows[0]);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
