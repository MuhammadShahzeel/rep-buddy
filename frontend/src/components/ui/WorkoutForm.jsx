import React, { useState } from 'react';
import { addWorkout } from '../../api/workoutApi';

function WorkoutForm({ setWorkouts }) {
  const [workoutData, setWorkoutData] = useState({ title: '', load: '', reps: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addWorkout(workoutData);
      if (response.status !== 200) {
        setError(response.data.error);
      } else {
        setWorkouts((prev) => [...prev, response.data]);
        setError(null);
        setWorkoutData({ title: '', load: '', reps: '' });
      }
    } catch (error) {
      console.error("Error adding workout:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 bg-opacity-70 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-md w-full font-poppins"
    >
      <h3 className="text-xl font-bold text-emerald-400 mb-4">Add a New Workout</h3>

      <input
        type="text"
        name="title"
        value={workoutData.title}
        onChange={handleChange}
        placeholder="Workout Title"
        className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <input
        type="number"
        name="load"
        value={workoutData.load}
        onChange={handleChange}
        placeholder="Load (kg)"
        className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <input
        type="number"
        name="reps"
        value={workoutData.reps}
        onChange={handleChange}
        placeholder="Reps"
        className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-2 rounded-lg transition-all duration-200"
      >
        Add Workout
      </button>

      {error && <div className="text-red-500 mt-4 text-sm">{error}</div>}
    </form>
  );
}

export default WorkoutForm;