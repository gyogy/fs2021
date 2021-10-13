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
      <Part name={args.parts[0].name} ex={args.parts[0].exercises} />
      <Part name={args.parts[1].name} ex={args.parts[1].exercises} />
      <Part name={args.parts[2].name} ex={args.parts[2].exercises} />
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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course_name={course} />
      <Content parts={parts}/>
      <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App