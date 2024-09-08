import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    console.log("connectDB is being called");

    const uri = process.env.MONGO_URI;
    console.log(`Mongo URI: ${uri}`);

    // event listener to handle initial connection
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected');
    });

    // event listener to handle initial connection errors
    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB disconnected');
    });

    // event listener to handle errors after initial connection was established
    mongoose.connection.on('error', (error) => {
        console.log(`MongoDB Connection Error: ${error.message}`);
    });

    try {
        await mongoose.connect(uri);
        // to handle initial connection
        // console.log("Connected to MongoDB!");
    } catch (error) {
        // to handle initial connection errors
        console.log(`MongoDB Connection Failed! ${error.message}`);
        process.exit(1);
    }
};
