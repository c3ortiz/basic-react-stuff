import './App.css';
import { useState } from 'react'
import { Statistics } from './Statistics.jsx'
import { Anecdotes } from './Anecdotes.jsx'
import { MostVoted } from './MostVoted.jsx'

const App = () => {

  const [votes, setVotes] = useState(0)
  const [number, setNumber] = useState(0)
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0
  })
  const [anecdotes] = useState([
    {
        id: 1,    
        anecdote: 'If it hurts, do it more often', 
        votes: 0
    },
    {
        id: 2,
        anecdote: 'Adding manpower to a late software project makes it later!', 
        votes: 0
    },
    {
        id: 3,
        anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', 
        votes: 0
    },
    {
        id: 4,
        anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 
        votes: 0
    },
    {
        id: 5,
        anecdote: 'Premature optimization is the root of all evil.', 
        votes: 0
    },
    {
        id: 6,
        anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', 
        votes: 0
    }
  ])

  const getRandomInt = (max) => Math.floor(Math.random() * max);
  let mostVoted = {
    id: 1,    
    anecdote: 'If it hurts, do it more often', 
    votes: 0
  }
  for(let i = 0; i < anecdotes.length; i++){
    if (mostVoted.votes < anecdotes[i].votes) {
      mostVoted = anecdotes[i]
      console.log(mostVoted)
    }
  }
  
  const handleGoodClick = () => setStatistics({...statistics, good: statistics.good + 1 })
  const handleNeutralClick = () => setStatistics({...statistics, neutral: statistics.neutral + 1 })
  const handleBadClick = () => setStatistics({...statistics, bad: statistics.bad + 1 })
  const handleGetClick = () => setNumber(getRandomInt(6))
  const handleVoteClick = () => {
    setVotes(0)
    setVotes(votes + 1)
    anecdotes[number].votes += 1
  }
 
  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <div>
        <h1>Statistics</h1>
        {statistics.good === 0 && statistics.neutral === 0 && statistics.bad === 0 ? 
        'No feedback given' :
        <Statistics statistics={statistics}/>}
      </div> 
      <div>
        <Anecdotes anecdotes={anecdotes} number={number}/>
        <button onClick={handleVoteClick}>vote</button> 
        <button onClick={handleGetClick}>get next anecdote</button> 
      </div>
      <div>
        <MostVoted mostVoted={mostVoted}/>
      </div>
    </>
  );
}

export default App
