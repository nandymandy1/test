const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.get("/all-user/", async (req, res) => {
  let users = await User.find();
  return res.status(200).json(users);
});

router.post("/register-user", async (req, res) => {
  //   console.log(req.body);
  // object destructuring
  let { body } = req;
  let newUser = new User({
    name: body.name,
    email: body.email,
    phone: body.phone,
    password: body.password,
  });
  newUser.password = await bcrypt.hash(newUser.password, 10);
  // save the user to the database
  await newUser.save();
  console.log("NEW_USER", newUser);
  return res.json(newUser);
});

module.exports = router;
