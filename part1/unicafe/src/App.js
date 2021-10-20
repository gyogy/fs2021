import React, { useState } from 'react'

const Button = ({ handler, fb_type }) => {
  return (
    <button onClick={handler}>
    {fb_type}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div> {text} {value}</div>
  )
}

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
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={good + neutral + bad} />
      <StatisticLine text='avg' value={(good - bad) / (good + neutral + bad)} />
      <StatisticLine text='positive' value={(good / (good + neutral + bad)) * 100 + '%'} />
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
      <Button handler={() => setGood(good + 1)} fb_type='good'/> 
      <Button handler={() => setNeutral(neutral + 1)} fb_type='neutral'/>
      <Button handler={() => setBad(bad + 1)} fb_type='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} />  
    </div>
  )
}

export default App