import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//create a function to upload image to cloudinary
export const uploadOnCloudinary = async (filePath) => {
  try {
    // Check if the file exists
    if (!filePath) {
      return null; // or throw an error if you prefer
    }
    const result = await cloudinary.uploader.upload(filePath);
    console.log(result);

    // Remove the file from the local filesystem after uploading
    fs.unlinkSync(filePath);

    return result.secure_url; // Return the secure URL of the uploaded image
  } catch (error) {
    fs.unlinkSync(filePath); // Ensure the file is removed even if upload fails
    console.error("Error uploading image to Cloudinary:", error);
    throw new Error("Image upload failed");
  }
};
