import React, { useState, useEffect } from "react";
import { Container, Typography, Box, TextField, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const Dashboard = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [newItem, setNewItem] = useState({ foodType: "", quantity: "", category: "", price: "" });
  const [editId, setEditId] = useState(null);

  // Fetch all food items
  useEffect(() => {
    fetch("http://localhost:5001/food-items")
      .then((res) => res.json())
      .then((data) => setFoodItems(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Handle Add or Update Item
  const handleAddOrUpdateItem = async () => {
    if (!newItem.foodType || !newItem.quantity || !newItem.category || !newItem.price) {
      alert("Please fill in all fields!");
      return;
    }

    const method = editId ? "PUT" : "POST";
    const url = editId ? `http://localhost:5001/food-items/${editId}` : "http://localhost:5001/food-items";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });

    // Refresh the food list
    fetch("http://localhost:5001/food-items")
      .then((res) => res.json())
      .then((data) => setFoodItems(data));

    setNewItem({ foodType: "", quantity: "", category: "", price: "" });
    setEditId(null);
  };

  // Handle Edit
  const handleEdit = (id) => {
    const item = foodItems.find((item) => item.id === id);
    setNewItem(item);
    setEditId(id);
  };

  // Handle Delete
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5001/food-items/${id}`, { method: "DELETE" });

    // Refresh the food list
    setFoodItems(foodItems.filter((item) => item.id !== id));
  };

  return (
    <Container maxWidth="xl" sx={{
      backgroundImage: `url('https://cdn.photoroom.com/v2/image-cache?path=gs://background-7ef44.appspot.com/backgrounds_v3/christmas/05_-_christmas.jpg')`, // Background Image
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh", // Ensures full-page height
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px"
    }}>
      <Box sx={{
        mt: 5,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        textAlign: "center",
        bgcolor: "rgba(255, 255, 255, 0.8)", // White background with transparency
        backdropFilter: "blur(10px)", // Adds a blur effect
        width: "80%",
      }}>
        <Typography variant="h4">Manage Your Food Orders</Typography>

        {/* Add/Edit Food Form */}
        <Grid container spacing={2} sx={{ mt: 3, justifyContent: "center" }}>
          <Grid item xs={12} sm={3}>
            <TextField fullWidth label="Food Type" value={newItem.foodType} onChange={(e) => setNewItem({ ...newItem, foodType: e.target.value })} />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField fullWidth label="Quantity" type="number" value={newItem.quantity} onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField fullWidth label="Category" value={newItem.category} onChange={(e) => setNewItem({ ...newItem, category: e.target.value })} />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField fullWidth label="Price" type="number" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button fullWidth variant="contained" color="primary" onClick={handleAddOrUpdateItem}>
              {editId ? "Update" : "Add"}
            </Button>
          </Grid>
        </Grid>

        {/* Display Table */}
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Food Type</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {foodItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.foodType}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>₹{item.price}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEdit(item.id)}><Edit /></IconButton>
                    <IconButton color="error" onClick={() => handleDelete(item.id)}><Delete /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Dashboard;


