const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./config/db");

const app = express();
const port = process.env.PORT || 9000;

const authRoutes = require("./routes/authRoutes");
const exploreCareerPath = require("./routes/exploreCareerPath");

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/explore", exploreCareerPath);

app.get("/", (req, res) => {
  res.send("GuideU Server is Alive...");
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
