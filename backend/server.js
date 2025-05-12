import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import connectDB from "./config/db.js";
import workoutRoutes from "./routes/workout.route.js";
import userRoutes from "./routes/user.route.js";


dotenv.config();
const app = express();



app.use(cors());
app.use(express.json());
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);


const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
