import User from './../models/User.model.js';

export const SignUp = async (req, res) => {
    try{
        const {firstName, lastName, email, password} = req.body;

        //if user already exists
        const existUser = await User.findOne({email});
        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // create and save new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password // In production, hash the password before saving
        });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}