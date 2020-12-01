import React, { useRef } from 'react'
import styled from 'styled-components'
import 'normalize.css'
import Habit from '../components/habit'
import useForm from '../utils/useForm'
import useHabits from '../utils/useHabits'

// TODO have a look at formik for dealing with forms in react
// TODO figure out how to remove the required styling from form inputs after a habit has been added and the inputs are cleared setCustomValidity('')on the input element doesn't seem to work...

const Wrapper = styled.div`
  height: 100%;
  width: 50vw;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: auto;
  grid-template-columns: 1;
  grid-template-rows: 2;
  display: flex;
  flex-direction: column;
  .add-habit-form {
    display: flex;
    height: 50px;
    align-items: center;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  label {
    margin: auto;
  }

  .add-habit {
    border: 2px solid lightgrey;
    background-color: #fff;
    font-size: 16px;
    height: 2.5em;
    width: 2.5em;
    border-radius: 999px;
    position: relative;

    &:after,
    &:before {
      content: '';
      display: block;
      background-color: grey;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:before {
      height: 1em;
      width: 0.2em;
    }

    &:after {
      height: 0.2em;
      width: 1em;
    }
  }
`

const initialHabitState = {
  name: '',
  id: null,
  frequency: '',
}

export default function Home() {
  // const [habits, setHabits] = useState([]) //make this a custom hook that
  const { values: habit, updateValue: updateHabit, reset: resetHabit } = useForm(initialHabitState)
  const { habits, addToHabits, removeFromHabits } = useHabits([]) // { habits, inputs: habit } use this as param maybe

  // use these to remove the styling after one item has been added
  const nameInputRef = useRef(),
    frequencyInputRef = useRef()

  function resetInputFields() {
    resetHabit()
  }

  function handleSubmit(e) {
    e.preventDefault()
    const id = new Date().getTime()
    addToHabits({ ...habit, id })
    resetInputFields()
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="add-habit-form">
        <label htmlFor="name">
          <input
            className="input"
            type="text"
            name="name"
            default="Enter your habit name here"
            onChange={updateHabit}
            value={habit.name}
            required
            ref={nameInputRef}
          ></input>
        </label>
        <label htmlFor="frequncy">
          <input
            className="input"
            type="number"
            name="frequency"
            onChange={updateHabit}
            value={habit.frequency}
            required
            ref={frequencyInputRef}
          ></input>
        </label>
        <button className="add-habit" type="submit" aria-label="Submit" />
      </form>
      <div className="habit-wrapper">
        {habits.map((habit, index) => (
          <React.Fragment key={habit.id}>
            {/* add the remove from habits logic to the Habit component and pass the removeFromHabits function as a prop */}
            <Habit name={habit.name} incrBy={1} />
            <button onClick={() => removeFromHabits(index)} key={new Date().getTime()}>
              -
            </button>
          </React.Fragment>
        ))}
      </div>
    </Wrapper>
  )
}
