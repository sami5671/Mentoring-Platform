const jwt = require("jsonwebtoken");
const axios = require("axios");
const { client } = require("../config/db");
const { oauth2client } = require("../utils/googleConfig");
const usersCollection = client.db("MentiGo").collection("users");
// Register User

// Login User
const googleLogin = async (req, res) => {
  try {
    const { code } = req.query;
    const googleRes = await oauth2client.getToken(code);
    oauth2client.setCredentials(googleRes.tokens);
    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );
    const { email, id, name, picture } = userRes.data;
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.json({
        message: "User already exists",
        user: existingUser,
      });
    } else {
      const user = {
        email,
        name,
        googleID: id,
        image: picture,
        status: "user",
      };
      const result = await usersCollection.insertOne(user);
      return res.json({
        message: "User registered successfully",
        user,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { googleLogin };
