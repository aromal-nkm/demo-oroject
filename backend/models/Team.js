const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  assignedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "FoodItem" }],
});

module.exports = mongoose.model("Team", TeamSchema);
