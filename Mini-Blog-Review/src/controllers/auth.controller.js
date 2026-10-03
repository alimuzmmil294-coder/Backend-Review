import { User } from "../models/user.modal.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a new user after hashing their password.
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(401).json({
        message: "User is already registered, please Login!",
        success: false,
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      message: "User registered successfully!",
      data: {
        newUser,
      },
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error!",
    });
  }
};

// Authenticate a user and return a signed JWT.
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(409).json({
        message: "User is not registered, please register first!",
        success: false,
      });
    }
    const comparePassword = await bcrypt.compare(password, findUser.password);
    if (!comparePassword) {
      return res.status(401).json({
        message: "Invalid credentials, please try again!",
        success: false,
      });
    }

    const token = jwt.sign({ userId: findUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "User logged in successfully!",
      data: {
        token,
      },
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error!",
    });
  }
};
