const { ObjectId } = require("mongodb");
const { client } = require("../config/db");
const scienceCareerPathCollection = client
  .db("MentiGo")
  .collection("sciencePaths");

// get all possible science fields
const getScienceCareerPaths = async (req, res) => {
  console.log("Entering...... data path");
  const result = await scienceCareerPathCollection.find().toArray();
  res.send(result);
};

// get a specific science field by id

const getScienceCareerPathById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await scienceCareerPathCollection.findOne({
      _id: new ObjectId(id),
    });
    if (!result) {
      return res.status(404).send({ message: "Science career path not found" });
    }
    res.send(result);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getScienceCareerPaths,
  getScienceCareerPathById,
};
