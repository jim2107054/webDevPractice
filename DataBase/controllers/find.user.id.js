import User from "../models/User.model.js";

export const FindUserById = async (req,res)=>{
    const {id} = req.params;// destructuring the id from params
    try{
        const existUser = await User.findById(id);
        if(!existUser){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json({message:"user fetched successfully", existUser})
    }
    catch(error){
        console.log("Error occured",error);
        res.status(500).json({message:"Internal server error",error})
    }
}