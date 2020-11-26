import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: monospace;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  padding: 0.25em 0.75em;
  min-width: 50%;
  min-height: 44px;
`

const Habit = ({ incrBy = 1, name }) => {
  const [streak, setStreak] = useState(0)

  const incrementStreak = () => {
    setStreak(Math.max(0, incrBy + streak))
  }

  const decrementStreak = () => {
    setStreak(Math.max(0, -incrBy + streak))
  }

  return (
    <Container>
      <ButtonWrapper>
        <Button className="button" onClick={incrementStreak}>
          {' '}
          Increase Streak{' '}
        </Button>
      </ButtonWrapper>

      <div className="StreakButton-wrapper">
        <div>{name}</div>
        <div>{`Streak: ${streak}`}</div>
      </div>
      <ButtonWrapper>
        <Button className="button" onClick={decrementStreak}>
          {' '}
          Decrease Streak{' '}
        </Button>
      </ButtonWrapper>
    </Container>
  )
}

Habit.propTypes = {
  incrBy: PropTypes.number,
  name: PropTypes.string.isRequired,
}

export default Habit
