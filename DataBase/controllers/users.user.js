import User from "../models/User.model.js";

export const Users = async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json({message:"Users fetched successfully", users})
    }
    catch(error){
        console.log("Error occured",error);
        res.status(500).json({message:"Internal server error",error})
    }
}