import User from "../models/User.model.js";

export const createUser = async (req, res) =>{
    const {name,age,email,userName,password} = req.body;
    try{
        const user = await User.create({
            name,
            age,
            email,
            userName,
            password
        })
        res.status(201).json({message:"User created successfully", user})

    }catch(error){
        console.log("Error occured",error);
        res.status(500).json({message:"Internal server error",error})
    }
}