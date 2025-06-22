import generateToken from "../config/token.js";
import User from "./../models/User.model.js";
import bcrypt from "bcryptjs";
import { uploadOnCloudinary } from "./../config/cloudinary.js";

export const SignUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // check if all fields are provided
    if (!firstName || !lastName || !email || !password) {
      return res.json({ status: 400, message: "All fields are required" });
    }

    console.log(req.file);
    let image = null; // Initialize image to null
    if (req.file) {
      image = await uploadOnCloudinary(req.file.path);
    }
    // const image = req.file ? req.file.path : null; // Handle profile image if provided

    //if user already exists
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.json({ status: 400, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // create and save new user
    // const newUser = new User({
    //     firstName,
    //     lastName,
    //     email,
    //     password: hashedPassword,
    // });
    // await newUser.save();
    // Create the user and return relevant info (excluding password) in response
    const createdUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      image, // Save the image URL if provided
    });

    const token = generateToken(createdUser._id);
    // Set the token in the response header
    res.cookie("token", token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict", // Helps prevent CSRF attacks
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: createdUser._id,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        email: createdUser.email,
        image: createdUser.image, // Include the image URL in the response
      },
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Login function to authenticate users
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if the user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.json({ status: 400, message: "User does not exist" });
    }

    //check if the password is correct
    const match = await bcrypt.compare(password, existingUser.password);
    if (!match) {
      return res.json({ status: 400, message: "Invalid Password" });
    }

    // Generate token
    const token = generateToken(existingUser._id);
    // Set the token in the response header
    res.cookie("token", token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict", // Helps prevent CSRF attacks
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.json({ status: 500, message: "Internal server error" });
  }
};

//Logout function to clear the token
export const Logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ status: 200, message: "Logout successful" });
  } catch (error) {
    console.error("Error during logout:", error);
    res.json({ status: 500, message: "Internal server error" });
  }
};
