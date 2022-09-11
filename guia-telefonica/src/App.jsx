import './App.css';
import React, { useState } from 'react'
import Filter from './Filter.jsx'
import AddNew from './AddNew.jsx'
import Numbers from './Numbers.jsx'

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 1,
      name: 'Arto Hellas',
      number: '213-4123-1223'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newId, setNewId ] = useState(2)
  const [ filter, setFilter ] = useState('')

  const handleFilterInput = (event) => {
    setFilter(event.target.value)
    persons.map(person => person.name.includes(filter))
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleAddButton = (event) => {
    event.preventDefault()
    if(newNumber === '' || newName === ''){
      if(newNumber === '') alert(`Please provide a number for the name ${newName}`)
      if(newName === '') alert(`Please provide a name for the number ${newNumber}`)
    }else{
      if(persons.some(person => person.name === newName)) {
        alert(`${newName} is already added to phonebook`)
      } else {
        const newPersonToAdd = { 
          id: newId,
          name: newName, 
          number: newNumber
        }
        setPersons([...persons, newPersonToAdd])
        setNewName('') 
        setNewNumber('')
        setNewId(prevId => prevId + 1)
      }
    }
    const xd = 'xd'
    if(xd.includes('f')) console.log('includes sirve')
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleFilterInput={handleFilterInput} filter={filter}/>
      <h2>Add new</h2>
      <AddNew handleNameChange={handleNameChange} newName={newName}
        handleNumberChange={handleNumberChange} newNumber={newNumber}
        handleAddButton={handleAddButton}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} filter={filter}/>
    </div>
  )
}

export default App;


