const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sandhiya",
  database: "food_db",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL");
});

// 🟢 POST: Add a new food item
app.post("/food-items", (req, res) => {
  const { foodType, quantity, category, price } = req.body;
  const total = quantity * price;
  const query = "INSERT INTO food_items (foodType, quantity, category, price, total) VALUES (?, ?, ?, ?, ?)";

  db.query(query, [foodType, quantity, category, price, total], (err, results) => {
    if (err) return res.status(500).json({ message: "Server Error" });
    res.json({ message: "Food Item Added Successfully" });
  });
});

// 🟢 GET: Retrieve all food items
app.get("/food-items", (req, res) => {
  const query = "SELECT * FROM food_items";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: "Server Error" });
    res.json(results);
  });
});

// 🟢 PUT: Edit an existing food item
app.put("/food-items/:id", (req, res) => {
  const { id } = req.params;
  const { foodType, quantity, category, price } = req.body;
  const total = quantity * price;
  const query = "UPDATE food_items SET foodType=?, quantity=?, category=?, price=?, total=? WHERE id=?";

  db.query(query, [foodType, quantity, category, price, total, id], (err, results) => {
    if (err) return res.status(500).json({ message: "Server Error" });
    res.json({ message: "Food Item Updated Successfully" });
  });
});

// 🟢 DELETE: Remove a food item
app.delete("/food-items/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM food_items WHERE id=?";

  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ message: "Server Error" });
    res.json({ message: "Food Item Deleted Successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
