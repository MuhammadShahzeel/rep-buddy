const WorkoutSkeleton = () => {
  return (
    <div className="relative bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl animate-pulse space-y-6">
      {/* Header skeleton */}
      <div className="flex justify-between items-start">
        <div>
          <div className="h-5 sm:h-6 w-32 bg-gray-700 rounded" />
          <div className="mt-2 h-1 w-12 bg-gray-700 rounded-full" />
        </div>
        <div className="flex gap-2">
          <div className="h-9 w-9 rounded-xl bg-gray-700" />
          <div className="h-9 w-9 rounded-xl bg-gray-700" />
        </div>
      </div>

      {/* Load and Reps cards skeleton */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
        <div className="flex items-center gap-3 bg-gray-800/50 p-3 sm:p-4 rounded-xl border border-gray-700/50">
          <div className="h-10 w-10 rounded-xl bg-gray-700" />
          <div className="space-y-2">
            <div className="h-3 w-16 bg-gray-700 rounded" />
            <div className="h-5 w-20 bg-gray-700 rounded" />
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-800/50 p-3 sm:p-4 rounded-xl border border-gray-700/50">
          <div className="h-10 w-10 rounded-xl bg-gray-700" />
          <div className="space-y-2">
            <div className="h-3 w-16 bg-gray-700 rounded" />
            <div className="h-5 w-20 bg-gray-700 rounded" />
          </div>
        </div>
      </div>

      {/* Date skeleton */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-gray-700" />
        <div className="h-4 w-40 bg-gray-700 rounded" />
      </div>
    </div>
  );
};

export default WorkoutSkeleton;
