import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
}));

app.use("/api/todos", todoRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "Route not found!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});