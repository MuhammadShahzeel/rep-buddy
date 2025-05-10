import React, { useState } from "react";
import { Save, X } from "lucide-react";
import { updateWorkout } from "../../api/workoutApi";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext"; // assuming you have this custom hook

function UpdateWorkoutModal({ isOpen, onClose, workout }) {
  const { dispatch } = useWorkoutsContext();
  const [updatedWorkout, setUpdatedWorkout] = useState(workout);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedWorkout((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await updateWorkout(workout._id, updatedWorkout);
      if (response.status === 200) {
        dispatch({ type: "UPDATE_WORKOUT", payload: response.data });
        onClose();
      }
    } catch (error) {
      console.error("Error updating workout:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="relative w-full max-w-md bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-2xl animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-extrabold mb-6 pb-2 text-white text-center">
          Update Workout
        </h3>

        <div className="space-y-6">
          <input
            name="title"
            type="text"
            value={updatedWorkout.title}
            onChange={handleChange}
            placeholder="Workout Title"
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="load"
              type="number"
              value={updatedWorkout.load}
              onChange={handleChange}
              placeholder="Load (kg)"
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
            />

            <input
              name="reps"
              type="number"
              value={updatedWorkout.reps}
              onChange={handleChange}
              placeholder="Reps"
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={onClose}
              className="w-1/2 py-3.5 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-semibold transition-all"
            >
              Cancel
            </button>
            <button
              disabled={
                !updatedWorkout.title ||
                !updatedWorkout.load ||
                !updatedWorkout.reps
              }
              onClick={handleSubmit}
              className={`w-1/2 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold shadow-md transition-all
    ${
      !updatedWorkout.title || !updatedWorkout.load || !updatedWorkout.reps
        ? "bg-emerald-600 text-white opacity-50 cursor-not-allowed"
        : "bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-400/20"
    }
  `}
            >
              <Save size={18} />
              <span>Update</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateWorkoutModal;
