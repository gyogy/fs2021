import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course_name}
      </h1>
    </div>
  )
}

const Content = (asdf) => {
  return (
    <div>
      <p>
        {asdf.part}: {asdf.exercises}
      </p>
    </div>
  )
}

const Total = (args) => {
  return (
    <div>
      <p>
        Number of exercises {args.sum}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return [
    <div>
      <Header course_name={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  ]
}

export default App