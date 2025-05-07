import React from 'react';
import { Dumbbell, Repeat, Calendar } from 'lucide-react';

const WorkoutDetails = ({ workout }) => {
  return (
    <div className="relative bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 group hover:-translate-y-1.5">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Title Section */}
      <div className="mb-6">
        <h4 className="text-2xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
          {workout.title}
        </h4>
        <div className="mt-2 h-1 w-12 bg-gradient-to-r from-emerald-400/80 to-cyan-400/80 rounded-full" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {/* Load Card */}
        <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-emerald-400/30 transition-all duration-200 hover:scale-[1.02]">
          <div className="p-2.5 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 rounded-xl">
            <Dumbbell className="text-emerald-400" size={22} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-400/90 uppercase tracking-wider">Load</p>
            <p className="text-xl font-bold text-white mt-0.5">
              {workout.load}
              <span className="text-sm text-gray-400 ml-1">kg</span>
            </p>
          </div>
        </div>

        {/* Reps Card */}
        <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-[1.02]">
          <div className="p-2.5 bg-gradient-to-br from-cyan-500/15 to-emerald-500/10 rounded-xl">
            <Repeat className="text-cyan-400" size={22} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-400/90 uppercase tracking-wider">Reps</p>
            <p className="text-xl font-bold text-white mt-0.5">
              {workout.reps}
              <span className="text-sm text-gray-400 ml-1">times</span>
            </p>
          </div>
        </div>
      </div>

      {/* Date Section */}
      <div className="flex items-center gap-2 text-sm text-gray-400/90 hover:text-gray-300 transition-colors duration-200">
        <div className="p-1.5 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <Calendar className="text-cyan-400" size={16} strokeWidth={2} />
        </div>
        <span className="font-medium">
          {new Date(workout.createdAt).toLocaleString(undefined, {
            dateStyle: 'medium',
            timeStyle: 'short',
          })}
        </span>
      </div>
    </div>
  );
};

export default WorkoutDetails;