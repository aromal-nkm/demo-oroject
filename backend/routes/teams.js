const express = require("express");
const router = express.Router();
const Team = require("../models/Team");
const FoodItem = require("../models/FoodItem");

// Get all teams
router.get("/", async (req, res) => {
  try {
    const teams = await Team.find().populate("assignedItems");
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new team
router.post("/post", async (req, res) => {
  const { name, contactNumber } = req.body;

  try {
    const newTeam = new Team({ name, contactNumber, assignedItems: [] });
    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Assign food items to a team
router.post("/:id/assign", async (req, res) => {
  const teamId = req.params.id;
  const { itemId } = req.body;

  try {
    const team = await Team.findById(teamId);
    const foodItem = await FoodItem.findById(itemId);

    if (!team || !foodItem) {
      return res.status(404).json({ message: "Team or Food Item not found" });
    }

    team.assignedItems.push(itemId);
    await team.save();

    res.json(team);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a team
router.delete("/:id", async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.json({ message: "Team deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
