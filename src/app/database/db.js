import mongoose from "mongoose";

export const connectToDB = async() =>{
    try {
        await mongoose.connect()
        console.log("Database connection successfully !!");
    } catch (error) {
        console.log("Database connection failed !!");
        console.log(error);
    }
}
