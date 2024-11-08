const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/TaskRoute");
const authRoutes = require("./routes/users");

const app = express();

const PORT = process.env.PORT || 4000;

// Enable CORS for all origins or specify your frontend URL
app.use(cors({
    origin: 'http://localhost:5173', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type'], // Specify allowed headers
}));

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Define routes
app.use("/api/task", routes);
app.use("/api/users", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});