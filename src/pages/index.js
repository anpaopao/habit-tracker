import React, { useState } from 'react'
import styled from 'styled-components'
import 'normalize.css'
import Habit from '../components/habit'
import useForm from '../utils/useForm'

// have a look at formik for dealing with forms in react

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

  input {
    margin: auto;
  }

  button {
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
export default function Home() {
  const [habits, setHabits] = useState([])

  const { values, updateValue } = useForm({
    name: '',
  })
  console.log(values.name)
  function addHabit(e) {
    e.preventDefault()
    setHabits(habits => [...habits, values])
    values.name = ''
  }

  return (
    <Wrapper>
      <form className="add-habit-form">
        <input
          type="text"
          name="habit"
          default="enter your habit name here"
          onChange={e => updateValue(e.target.value)}
          value={values.name}
        ></input>
        <input type="submit" onClick={addHabit} />
      </form>
      <div className="habit-wrapper">
        {/* add a key prop */}
        {habits.map(habit => (
          <Habit name={habit} incrBy={1} />
        ))}
      </div>
    </Wrapper>
  )
}
