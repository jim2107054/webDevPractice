import User from "../models/User.model.js";

export const UpdateUser = async (req,res)=>{
    const {id} = req.params;
    const {name,age,email} = req.body;
    try{
        const existUser = await User.findById(id);
        if(!existUser){
            return res.status(404).json({message:"User not found"})
        }
    const updatedUser = await User.findByIdAndUpdate(id,{name,age,email},{new:true});
        res.status(200).json({message:"User updated successfully", updatedUser})
    }
    catch(error){
        console.log("Error occured",error);
        res.status(500).json({message:"Internal server error",error})
    }
}