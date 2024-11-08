import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, List, ListItem, ListItemText } from "@mui/material";

const API_URL = "http://localhost:3000/api/food";

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [formData, setFormData] = useState({ name: "", quantity: "", expiryDate: "" });

  const fetchFoodItems = async () => {
    const res = await axios.get("http://localhost:3000/api/food/get");
    setFoodItems(res.data);
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/food/post", formData);
    fetchFoodItems();
    setFormData({ name: "", quantity: "", expiryDate: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Food Items</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <TextField
          label="Food Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          style={{ marginRight: "10px" }}
        />
        <TextField
          label="Quantity"
          type="number"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          required
          style={{ marginRight: "10px" }}
        />
        <TextField
          type="date"
          value={formData.expiryDate}
          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
          required
          InputLabelProps={{ shrink: true }}
          style={{ marginRight: "10px" }}
        />
        <Button variant="contained" type="submit">
          Add Food
        </Button>
      </form>
      <List>
        {foodItems.map((item) => (
          <ListItem key={item._id}>
            <ListItemText
              primary={`${item.name} - Quantity: ${item.quantity}`}
              secondary={`Expiry: ${new Date(item.expiryDate).toLocaleDateString()}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FoodItems;




"http://localhost:3000/api/food/get"
"http://localhost:3000/api/food/post"