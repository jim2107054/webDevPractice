//To generate token, when we need to generate token, we can use the following command
import e from "express";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  try {
    const token = jwt.sign(
      //sign method is used to create a new token
      {id}, //id is the user id, we will use this to identify the user
      process.env.JWT_SECRET,
      { expiresIn: "7d" } //id is the user id, JWT_SECRET is the secret key, expiresIn is the time after which the token will expire
    );

    //we successfully created the token, now we can return it
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Token generation failed");
  }
};
export default generateToken;
// This code is used to generate a JWT token for user authentication.
//we will provide the id, it will return a token (using the id and secret key), after the expiresIn time, the token will expire
