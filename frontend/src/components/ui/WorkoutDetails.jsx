import { Dumbbell, Repeat, Calendar, Trash2, Pencil } from "lucide-react";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { deleteWorkout } from "../../api/workoutApi";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";

const WorkoutDetails = ({ workout, onEdit }) => {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutsContext();
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    if (!user) {
      setError("You must be logged in to delete a workout.");
      return;
    }
    try {
      const response = await deleteWorkout(id, user.token);

      if (response.status !== 200) {
        setError(response.data.error);
      } else {
        dispatch({ type: "DELETE_WORKOUT", payload: id });
        setError(null);
      }
    } catch (error) {
      console.error("Error deleting workout:", error);
      setError("Failed to delete workout. Please try again.");
    }
  };

  const handleEdit = () => {
    onEdit(workout);
  };

  return (
    <div className="relative bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl hover:shadow-emerald-500/10 transition-shadow duration-300">
      {/* Header */}
      <div className="mb-4 sm:mb-6 flex justify-between items-start">
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            {workout.title}
          </h4>
          <div className="mt-2 h-1 w-12 bg-gradient-to-r from-emerald-400/80 to-cyan-400/80 rounded-full" />
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="p-1.5 sm:p-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-emerald-500/10"
            title="Edit Workout"
          >
            <Pencil
              className="text-emerald-400"
              size={18}
              sm:size={20}
              strokeWidth={2.2}
            />
          </button>
          <button
            onClick={() => handleDelete(workout._id)}
            className="p-1.5 sm:p-2 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/40 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-red-500/10"
            title="Delete Workout"
          >
            <Trash2
              className="text-red-500"
              size={18}
              sm:size={20}
              strokeWidth={2.2}
            />
          </button>
        </div>
      </div>

      {/* Stats - Stack on small mobile devices */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-4 sm:mb-6">
        <div className="flex items-center gap-3 bg-gray-800/50 p-3 sm:p-4 rounded-xl border border-gray-700/50">
          <div className="p-2 sm:p-2.5 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 rounded-xl">
            <Dumbbell
              className="text-emerald-400"
              size={20}
              strokeWidth={2.5}
            />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-400/90 uppercase tracking-wider">
              Load
            </p>
            <p className="text-lg sm:text-xl font-bold text-white mt-0.5">
              {workout.load}
              <span className="text-sm text-gray-400 ml-1">kg</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gray-800/50 p-3 sm:p-4 rounded-xl border border-gray-700/50">
          <div className="p-2 sm:p-2.5 bg-gradient-to-br from-cyan-500/15 to-emerald-500/10 rounded-xl">
            <Repeat className="text-cyan-400" size={20} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-400/90 uppercase tracking-wider">
              Reps
            </p>
            <p className="text-lg sm:text-xl font-bold text-white mt-0.5">
              {workout.reps}
              <span className="text-sm text-gray-400 ml-1">times</span>
            </p>
          </div>
        </div>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400/90">
        <div className="p-1.5 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <Calendar
            className="text-cyan-400"
            size={14}
            sm:size={16}
            strokeWidth={2}
          />
        </div>
        <span className="font-medium">
          {new Date(workout.createdAt).toLocaleString(undefined, {
            dateStyle: "medium",
            timeStyle: "short",
            hour12: true,
          })}
        </span>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-3 sm:px-4 py-2 rounded-lg mt-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default WorkoutDetails;
