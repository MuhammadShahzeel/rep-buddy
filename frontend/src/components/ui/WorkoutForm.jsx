import React, { useState } from 'react';
import { addWorkout } from '../../api/workoutApi';
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext';

function WorkoutForm() {
  const [workoutData, setWorkoutData] = useState({ title: '', load: '', reps: '' });
  const [error, setError] = useState(null);
  const {dispatch} = useWorkoutsContext();

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
        dispatch({ type: 'ADD_WORKOUT', payload: response.data });
      
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
  className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
>
  <h3 className="text-2xl font-extrabold mb-6 pb-2 text-white">
    Add New Workout
  </h3>

  <div className="space-y-6">
    {/* Title Input */}
    <div className="space-y-2">
      <input
        id="title"
        type="text"
        name="title"
        value={workoutData.title}
        onChange={handleChange}
        placeholder="Workout Title"
        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
      />
    </div>

    {/* Load and Reps */}
    <div className="grid grid-cols-2 gap-4">
      <input
        id="load"
        type="number"
        name="load"
        value={workoutData.load}
        onChange={handleChange}
        placeholder="Load (kg)"
        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
      />

      <input
        id="reps"
        type="number"
        name="reps"
        value={workoutData.reps}
        onChange={handleChange}
        placeholder="Reps"
        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-emerald-400/20 transition-all"
    >
      Add Workout
    </button>

    {/* Error Message */}
    {error && (
      <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-lg">
        {error}
      </div>
    )}
  </div>
</form>

  );
}

export default WorkoutForm;