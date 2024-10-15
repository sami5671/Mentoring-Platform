const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./config/db");

const app = express();
const port = process.env.PORT || 9000;

const scienceCareerRoutes = require("./routes/ScienceCareerRoutes");

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/exploreScienceCareer", scienceCareerRoutes);

app.get("/", (req, res) => {
  res.send("GuideU Server is Alive...");
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
