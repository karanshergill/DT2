import mongoose from "mongoose";
import dotenv from "dotenv";
import { logger } from "../utils/logger.js";

dotenv.config();

export const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    // to handle initial connection
    mongoose.connection.on('connected', () => {
        logger.info('MongoDB connected');
    });
    // to handle initial connection errors
    mongoose.connection.on('disconnected', () => {
        logger.info('MongoDB disconnected');
    });
    // to handle errors after initial connection was established
    mongoose.connection.on('error', (error) => {
        logger.error(`MongoDB Connection Error: ${error.message}`);
    });

    try {
        await mongoose.connect(uri);
        // to handle initial connection
        logger.info("MongoDB connected successfully");
    } catch (error) {
        // to handle initial connection errors
        logger.error(`MongoDB Connection Failed! ${error.message}`);
        process.exit(1);
    }
};
