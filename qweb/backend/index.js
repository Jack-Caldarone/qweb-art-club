const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // To handle cross-origin requests from React
const app = express();
const PORT = 8000;

// Allow CORS requests from the frontend
app.use(cors());

// Connect to SQLite database
let db = new sqlite3.Database('./db.sqlite3', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error('Could not connect to database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// API route to fetch upcoming events from the database
app.get('/api/upcoming-events', (req, res) => {
  db.all('SELECT * FROM upcoming_events', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows); // Send rows as JSON
  });
});

app.get('/api/past-events', (req, res) => {
  db.all('SELECT * FROM past_events', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows); // Send rows as JSON
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});