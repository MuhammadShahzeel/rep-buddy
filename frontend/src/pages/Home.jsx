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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-4">Your Workouts</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
        {/* Workouts Column */}
        <div className="space-y-6">
          {workouts && workouts.length > 0 ? (
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))
          ) : (
            <p className="text-gray-400 text-center py-8">No workouts found. Add your first workout!</p>
          )}
        </div>
  
        {/* Form Column */}
        <div className="lg:sticky lg:top-24 self-start">
          <WorkoutForm setWorkouts={setWorkouts} />
        </div>
      </div>
    </div>
  );}

export default Home;
