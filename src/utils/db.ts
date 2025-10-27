import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";  

export const connectDB = async() => {

  try {
    
    await mongoose.connect(MONGO_URI);
    console.log("Mongo DB connected successfully");
  } catch (err) {
    console.log("Database connection error:", err);
    process.exit(1);
}
}