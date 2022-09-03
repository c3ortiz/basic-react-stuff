const Anecdotes = ({selected, setSelected, votes, setVotes}) => {

   
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    const anecdotes = [
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
    ]
    

    const handleVoteClick = () => {
        setVotes(selected.votes += 1)
    }
    selected.votes = votes
    


    

    const handleGetClick = () => setSelected(anecdotes[getRandomInt(6)])

    console.log(anecdotes)
    console.log(selected)

    

    return(
        <>
            <p>{selected.anecdote}</p>
            <p>votos acá: {selected.votes}</p>
            <button onClick={handleVoteClick}>vote</button> 
            <button onClick={handleGetClick}>get next anecdote</button> 
        </>
    );
}

export default Anecdotes

//Hacer que los votos se queden atados a cada una de las frases
//Ver por qué los console.log de las lineas 33 y 35 salen igual