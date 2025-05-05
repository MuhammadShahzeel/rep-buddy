import React, { useEffect,useState } from 'react'
import { getWorkouts } from '../api/workoutApi'

const Home = () => {
  const [workouts,setWorkouts ] = useState(null)
useEffect(() => {
  const fetchWorkouts = async () => {
  try {
    const response = await getWorkouts();
    if (response.status === 200) {
      
      setWorkouts(response.data);
   ;
  
    }
  } catch (error) {
    console.error(error);
   
  }
}
  fetchWorkouts()

  }
  ,[])
  
  return (
    <div>
      home
    </div>
  )
}

export default Home
