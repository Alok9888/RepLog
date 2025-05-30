import React from "react";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import generateWorkout from "./utils/functions";
import { useState } from "react";


const App = () => {
  
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')
  const [workout, setWorkout] = useState(null)

  function updateWorkout(){

    if(muscles.length < 1){
      return
    }

    const newworkout = generateWorkout({ poison, muscles, goal});
    setWorkout(newworkout);

    setTimeout(() => {
      const workoutSection = document.getElementById('workout');
      if(workoutSection){
        workoutSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 0);
  }

  return (
    <main className="min-h-screen flex flex-col 
    bg-gradient-to-r from-slate-800 to-slate-950
    text-white text-sm sm:text-base">
      <Hero/>
      <Generator
       poison={poison}
       setPoison={setPoison}
       muscles={muscles}
       setMuscles={setMuscles}
       goal={goal}
       setGoal={setGoal}
       updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App;