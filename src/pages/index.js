import React, { useState } from 'react'
import styled from 'styled-components'
import 'normalize.css'

const Wrapper = styled.div`
  height: 50vh;
  width: 50vw;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: auto;
  grid-template-columns: 1;
  grid-template-rows: 2;
  display: flex;

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
  .habit-wrapper {
    display: flex;
  }
`
export default function Home() {
  const [habits, setHabit] = useState([])
  const [tempHabit, settempHabit] = useState('')

  function addHabit(e) {
    e.preventDefault()

    setHabit(habits => [...habits, tempHabit])
    // console.log('tempHabit', tempHabit)
    console.log('habit', habits)
    settempHabit('')
  }

  return (
    <Wrapper>
      <form className="add-habit-form">
        {/* when I click the button add habit to state */}
        <input
          type="text"
          name="habit"
          default="enter your habit name here"
          onChange={e => settempHabit(e.target.value)}
          value={tempHabit}
        ></input>
        <input type="submit" onClick={addHabit} />
      </form>
      <div className="habit-wrapper">
        {/* {habits.map(habit => (
          <Habit name={habit} streak={1} />
        ))} */}
      </div>
    </Wrapper>
  )
}
