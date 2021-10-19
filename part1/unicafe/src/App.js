import React, { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {

  if (good + bad + neutral === 0) {
    return (
      <div>
        <h2>statistics</h2>
        No feedback given.
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}<br />
      neutral {neutral}<br />
      bad {bad}<br />
      all {good + neutral + bad}<br />
      average {(good-bad) / (good + neutral + bad)}<br />
      positive {(good / (good + neutral + bad)) * 100} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />  
    </div>
  )
}

export default App