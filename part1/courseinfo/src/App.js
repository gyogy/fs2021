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

const Part = (asdf) => {
  return (
    <div>
      <p>
        {asdf.name}: {asdf.ex}
      </p>
    </div>
  )
}

const Content = (args) => {
  return (
    <div>
      <Part name={args.part1} ex={args.ex1} />
      <Part name={args.part2} ex={args.ex2} />
      <Part name={args.part3} ex={args.ex3} />
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

  return (
    <div>
      <Header course_name={course} />
      <Content part1={part1} part2={part2} part3={part3}
        ex1={exercises1} ex2={exercises2} ex3={exercises3} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App