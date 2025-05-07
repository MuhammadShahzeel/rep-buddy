import React from 'react';

const WorkoutDetails = ({ workout }) => {
  return (
    <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-emerald-500/20 transition-all duration-200 font-poppins">
      <h4 className="text-2xl font-semibold text-emerald-400 mb-3">{workout.title}</h4>
      <p className="text-gray-300">
        <strong className="text-gray-400">Load (kg): </strong>{workout.load}
      </p>
      <p className="text-gray-300">
        <strong className="text-gray-400">Reps: </strong>{workout.reps}
      </p>
      <p className="text-sm text-gray-500 mt-3">{new Date(workout.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default WorkoutDetails;