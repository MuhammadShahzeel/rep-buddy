import React, { useEffect, useState } from 'react';
import { getWorkouts } from '../api/workoutApi';
import WorkoutDetails from '../components/ui/WorkoutDetails';
import WorkoutForm from '../components/ui/WorkoutForm';

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await getWorkouts();
        if (response.status === 200) {
          setWorkouts(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-12 font-poppins">
      <h2 className="text-4xl font-bold text-emerald-400 mb-10 tracking-tight">Your Workouts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 flex flex-col gap-6">
          {workouts && workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        </div>
        <div className="md:sticky md:top-10">
          <WorkoutForm setWorkouts={setWorkouts} />
        </div>
      </div>
    </div>
  );
};

export default Home;
