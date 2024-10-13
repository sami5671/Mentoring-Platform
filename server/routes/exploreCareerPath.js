const express = require("express");
const {
  exploreCareerPath,
} = require("../controllers/exploreCareerPathController");

const router = express.Router();

router.get("/scienceCareerPath", exploreCareerPath);

module.exports = router;
