const express = require("express");
const router = express.Router();
const FoodItem = require("../models/FoodItem");

// Get all food items
router.get("/get", async (req, res) => {
  try {
    const items = await FoodItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new food item
router.post("/post", async (req, res) => {
  const { name, quantity, expiryDate } = req.body;

  try {
    const newItem = new FoodItem({ name, quantity, expiryDate });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a food item
router.delete("/:id", async (req, res) => {
  try {
    await FoodItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Food item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
