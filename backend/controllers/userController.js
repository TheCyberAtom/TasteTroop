import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Creating a token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// User Login
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Please enter correct password",
      });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: "Error in login" });
  }
};

// User Register
const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const isExist = await userModel.findOne({ email });
    if (isExist) {
      return res.json({ success: false, messsage: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        messsage: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        messsage: "Password length should be 8 or more character",
      });
    }

    // Hasing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in registration" });
  }
};

export { userLogin, userRegister };
