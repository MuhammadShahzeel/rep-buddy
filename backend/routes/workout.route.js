import express from "express";
import {
  getWorkouts,
  createWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workout.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = express.Router();
router.use(requireAuth)

// GET /workouts
router.get("/", getWorkouts);

// POST /workouts
router.post("/", createWorkout);

// GET /workouts/:id
router.get("/:id", getWorkout);

// DELETE /workouts/:id
router.delete("/:id", deleteWorkout);

// PATCH /workouts/:id
router.put("/:id", updateWorkout);

export default router;
