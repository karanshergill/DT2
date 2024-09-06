import pino from "pino";
import dotenv from "dotenv";

dotenv.config();
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

export const logger = pino({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    transport: process.env.NODE_ENV !== 'production' ? {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: true,
            ignore: 'pid,hostname',
        },
    } : undefined,
});

// to-do: turn off logging in production: 'info' => 'silent'.