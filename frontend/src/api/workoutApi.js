import axios from "axios";

// Create Axios Instance
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Create Workout
export const addWorkout = (data) => {
  return api.post("/workouts", data);
};

// Get All Workouts
export const getWorkouts = () => {
  return api.get("/workouts");
};

// Get Single Workout by ID
export const getWorkout = (id) => {
  return api.get(`/workouts/${id}`);
};

// Delete Workout
export const deleteWorkout = (id) => {
  return api.delete(`/workouts/${id}`);
};

// Update Workout
export const updateWorkout = (id, data) => {
  return api.put(`/workouts/${id}`, data);
};