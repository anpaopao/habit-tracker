import { useState } from 'react'
// replace temp param
export default function useHabits() {
  // create some state to hold our Habits
  const [habits, setHabits] = useState([])

  // 2. make a function to add things to Habits
  function addToHabits(habit) {
    setHabits([...habits, habit])
  }

  // 3. make a function to remove things from Habits
  function removeFromHabits(index) {
    setHabits([
      // everything before the item we want to remove
      ...habits.slice(0, index),
      // everything after the item we want to remove
      ...habits.slice(index + 1),
    ])
  }

  // 4. send this data the serverless funtion when they checkout
  return {
    habits,
    addToHabits,
    removeFromHabits,
  }
}
