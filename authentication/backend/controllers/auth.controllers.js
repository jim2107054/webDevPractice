import User from './../models/User.model.js';
import bcrypt from 'bcryptjs';

export const SignUp = async (req, res) => {
    
    try{
        const {firstName, lastName, email, password} = req.body;
        // check if all fields are provided
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        //if user already exists
        const existUser = await User.findOne({email});
        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
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
        });
        res.status(201).json({ 
            message: "User created successfully",
            user: {
                id: createdUser._id,
                firstName: createdUser.firstName,
                lastName: createdUser.lastName,
                email: createdUser.email
            }
        });
    }
    catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}