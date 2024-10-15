const express = require("express");
const {
  getScienceCareerPaths,
  getScienceCareerPathById,
} = require("../controllers/exploreScienceCareerPathController");

const router = express.Router();

router.get("/", getScienceCareerPaths);
router.get("/:id", getScienceCareerPathById);

module.exports = router;
