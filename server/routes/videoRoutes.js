const express = require("express");
const {
  getAllVideos,
  getVideoById,
  addVideo,
  editVideo,
  deleteVideo,
} = require("../controllers/videoController");

const router = express.Router();

router.get("/", getAllVideos);
router.get("/:videoId", getVideoById);
router.post("/addVideo", addVideo);
router.patch("/:videoId", editVideo);
router.delete("/:id", deleteVideo);

module.exports = router;
