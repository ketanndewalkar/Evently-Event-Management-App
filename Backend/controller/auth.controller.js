const { user } = require("../models/AuthSchema");
const { getFile } = require("./getFile.js");

const signup = async (req, res) => {
  try {
    console.log(req.body)
    const { username, password, email } = req.body;
    const newUser = new user({ username, password, email });
    await newUser.save();
    res.cookie("token", await newUser.generateAuthToken(), {
      httpOnly: true,
      secure: true,
    });
    res
      .status(201)
      .json({ token:await newUser.generateAuthToken(),user: newUser, message: "User created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const User = await user.findOne({username});
    if (!User) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const Valid = await User.comparePassword(password);
    if (!Valid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //get the profile
    let image="";
    if(User.profile){
      image = await getFile(User.profile);
    }
    console.log("image:",image);


    console.log(Valid)
    res.cookie("token", await User.generateAuthToken(), {
      httpOnly: true,
      secure: true,
    });
    return res.status(200).json({
      token:await User.generateAuthToken(),
      User:{...User.toObject(),profile:image?image:""},
      id: User._id,
      message: "User logged in successfully",
      
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};



module.exports = { signup, login };
