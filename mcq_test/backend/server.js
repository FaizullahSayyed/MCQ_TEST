const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose(); // For error logging
const path = require('path');
const { v4 } = require('uuid');

const app = express();
const port = 4000;

const dbPath = path.join(__dirname, 'database', 'mcq_test.db');
const db = new sqlite3.Database(dbPath);

app.use(express.json());
app.use(cors());

app.post('/signup', async (req, res) => {
  try {
    const { fullName, username, password, email } = req.body;

    // Validate user input (required fields, email format, etc.)
    // ...

    // Check if username or email already exists
    const existingUser = await new Promise((resolve, reject) => {
      db.all(
        `SELECT * FROM users WHERE username = ? OR email = ?`,
        [username, email],
        (error, rows) => {
          if (error) {
            reject(error);
          } else {
            resolve(rows.length > 0 ? rows[0] : null); // Return first row if exists
          }
        }
      );
    });

    if (existingUser) {
      if (existingUser.username === username) {
        res.status(409).send('Username already exists. Please choose a different username.');
      } else {
        res.status(409).send('Email address already in use. Please try a different email.');
      }
      return; // Exit the route function if user or email exists
    }

    const newUserId = v4();

    // Insert new user into database
    await new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO users VALUES (?, ?, ?, ?, ?)`,
        [newUserId, fullName, username, password, email],
        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        }
      );
    });

    res.send('Signup successful');
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log('Running on:', port);
});