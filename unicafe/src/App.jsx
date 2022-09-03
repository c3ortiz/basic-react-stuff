import './App.css';
import Statistics from './statistics.jsx'
import Anecdotes from './anecdotes.jsx'
import { useState } from 'react'

const App = () => {

  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0
  }) 

  const [selected, setSelected] = useState({
    id: 1,    
    anecdote: 'If it hurts, do it more often', 
    votes: 0
  })

  const [votes, setVotes] = useState(0)

  const handleGoodClick = () => setStatistics({...statistics, good: statistics.good + 1 })
  const handleNeutralClick = () => setStatistics({...statistics, neutral: statistics.neutral + 1 })
  const handleBadClick = () => setStatistics({...statistics, bad: statistics.bad + 1 })
  
    
  return (
    <>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>Statistics</h1>
      <div>{statistics.good === 0 && statistics.neutral === 0 && statistics.bad === 0 ? 
      'No feedback given' :
      <Statistics statistics={statistics}/>}</div> 
      <h1>Anecdotes</h1>
      <Anecdotes  selected={selected} setSelected={setSelected} votes={votes} setVotes={setVotes}/>
    </>
  )
}

export default App;
