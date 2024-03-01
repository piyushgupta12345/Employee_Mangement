import mongoose from "mongoose";

export const connectToDB = async() =>{
    try {
        const connection = await mongoose.connect('mongodb://0.0.0.0:27017',{
            dbName:"employeeMangement2"
        })
        console.log("Database connection successfully !!");
    } catch (error) {
        console.log("Database connection failed !!");
        console.log(error);
    }
}
