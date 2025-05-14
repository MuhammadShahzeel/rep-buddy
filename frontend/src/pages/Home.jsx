import { useEffect, useState } from "react";
import { getWorkouts } from "../api/workoutApi";
import WorkoutDetails from "../components/ui/WorkoutDetails";
import WorkoutForm from "../components/ui/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import UpdateWorkoutModal from "../components/ui/UpdateWorkoutModal";
import { useAuthContext } from "../hooks/useAuthContext";
import WorkoutSkeleton from "../components/ui/WorkoutSkeleton";

const Home = () => {
  const { user } = useAuthContext();
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleEdit = (workout) => {
    setSelectedWorkout(workout);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWorkout(null);
  };
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await getWorkouts(user.token);
        if (response.status === 200) {
          dispatch({ type: "SET_WORKOUTS", payload: response.data });
        }
      } catch (error) {
        console.error(error);
      }
      finally {
      setLoading(false); // Hide skeletons after loading is done
    }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="w-full min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Your Workouts</h2>
      
      {/* Responsive grid - stack on mobile, side-by-side on larger screens */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 sm:gap-8">
        {/* Workouts Column - Always first, regardless of screen size */}
        <div className="space-y-4 sm:space-y-6">
      {loading ? (
  // Show 3 skeletons while loading
  <>
    <WorkoutSkeleton/>
    <WorkoutSkeleton />
   
  </>
) : workouts && workouts.length > 0 ? (
  workouts.map((workout) => (
    <WorkoutDetails
      key={workout._id}
      workout={workout}
      onEdit={handleEdit}
    />
  ))
) : (
  <p className="text-gray-400 text-center py-6 sm:py-8">
    No workouts found. Add your first workout!
  </p>
)}

        </div>

        {/* Form Column - Always after workouts */}
        <div className="lg:sticky lg:top-24 self-start mb-6 lg:mb-0">
          <WorkoutForm />
        </div>
      </div>
      
      {selectedWorkout && (
        <UpdateWorkoutModal
          isOpen={showModal}
          onClose={closeModal}
          workout={selectedWorkout}
        />
      )}
    </div>
  );
};

export default Home;