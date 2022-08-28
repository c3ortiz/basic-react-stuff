import Header from './header.js'
import Content from './content.js'
import Total from './total.js'
import Contador from './contador.js'
import { useState } from 'react'

const App = () => {

    const course = {
      name: 'Half Stack application development',
      parts: [ 
        {
            id: 1,
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            id: 2,
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            id: 3,
            name: 'State of a component',
            exercises: 14
        }
      ] 
    }
    
    const [contador, setContador] = useState(0) //Devuelve un arreglo con posición 1 el valor y posición 2 un método para actualizar el valor

    /*setInterval(() => {
        updateContador(contador + 1)
    }, 4000)*/

    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        <Contador contador={contador} setContador={setContador} />
      </div>
    )
  }

  export default App