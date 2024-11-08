const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const foodRoutes = require("./routes/foodItems");
const teamRoutes = require("./routes/teams");


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/food", foodRoutes);
app.use("/api/teams", teamRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





