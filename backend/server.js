require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/Auth");
const authMiddleware = require("./middleware/AuthMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/api/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: `Welcome to the dashboard, ${req.user.username}!`,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
