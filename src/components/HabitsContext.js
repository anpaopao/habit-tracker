import React, { useState } from 'react'

// create a habits context
const HabitsContext = React.createContext()

export function HabitsProvider({ children }) {
  // put state here
  const [habits, setHabits] = useState([])
  return <HabitsContext.Provider value={[habits, setHabits]}>{children}</HabitsContext.Provider>
}

export default HabitsContext
