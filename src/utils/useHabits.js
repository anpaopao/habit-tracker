import { useContext } from 'react'
import HabitsContext from '../components/HabitsContext'
// replace temp param
export default function useHabits() {
  // create some state to hold our Habits
  const [habits, setHabits] = useContext(HabitsContext)

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

  return {
    habits,
    addToHabits,
    removeFromHabits,
  }
}
