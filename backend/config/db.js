import mongoose from "mongoose";

export const connectDB = async ()=>{
  await mongoose.connect('mongodb+srv://kundanbonde28:982264@cluster0.1urmczr.mongodb.net/tomato').then(()=>console.log("DB connected"));
}