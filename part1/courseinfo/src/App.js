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
      <Part name={args.obj1.name} ex={args.obj1.exercises} />
      <Part name={args.obj2.name} ex={args.obj2.exercises} />
      <Part name={args.obj3.name} ex={args.obj3.exercises} />
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

    const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course_name={course} />
      <Content obj1={part1} obj2={part2} obj3={part3}/>
      <Total sum={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App