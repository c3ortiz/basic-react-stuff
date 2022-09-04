export const Anecdotes = ({anecdotes, number}) => {

    return(
        <>
            <h1>Anecdotes</h1>
            <p>{anecdotes[number].anecdote}</p>
            <p>has {anecdotes[number].votes} votes</p>
        </>
    );
}



