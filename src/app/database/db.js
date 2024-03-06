import mongoose from "mongoose";

export const connectToDB = async() =>{
    try {
        const connection = await mongoose.connect(`${process.env.PORT}`,{
            dbName:"employeeMangement2"
        })
        console.log("Database connection successfully !!");
    } catch (error) {
        console.log("Database connection failed !!");
        console.log(error);
    }
}
