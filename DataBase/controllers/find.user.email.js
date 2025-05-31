import User from "../models/User.model.js";

export const FindUserByEmail = async (req,res)=>{
    const {email} = req.body;
    try{
        const existUser = await User.findOne({email});
        if(!existUser){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json({existUser})
    }
    catch(error){
        console.log("Error occured",error);
        res.status(500).json({message:"Internal server error",error})
    }
}