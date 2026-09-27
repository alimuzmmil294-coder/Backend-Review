import bcrypt from "bcryptjs";
import { User } from "../modals/user.modal.js";
import JWT from "jsonwebtoken";

const tokenGenerator = (payload) => {
  return JWT.sign(payload, process.env.JWT_SECRET);
};


// Signup API
export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

    const findUser = await User.findOne({ email });
    if (findUser) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    console.log("Hased Password :" + hashPassword);

    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });
    res.status(201).json({
      message: "User created successfully!",
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};


// Login API
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(404).json({
        message: "User Not Found!",
        success: false,
      });
    }

    const comparePassowrd = await bcrypt.compare(password, findUser.password);
    if (!comparePassowrd) {
      return res.status(401).json({
        message: "Invalid Password!",
        success: false,
      });
    }

    const token = tokenGenerator({ id: findUser._id, email: findUser.email });
    res.status(200).json({
      message: "Login successful!",
      success: true,
      token,
      data: findUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
export const forgotPassword = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
export const resetPassword = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
export const logout = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
