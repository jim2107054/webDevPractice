import User from "../models/User.model.js";

export const DeleteUser = async (req,res)=>{
    const {id} = req.params;
    try{
        const existUser = await User.findById(id);
        if(!existUser){
            return res.status(404).json({message:"User not found"})
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({message:"User deleted successfully"})
    }
    catch(error){
        console.log("Error occured",error);
        res.status(500).json({message:"Internal server error",error})
    }
}