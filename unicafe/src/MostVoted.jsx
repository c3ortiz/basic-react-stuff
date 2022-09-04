export const MostVoted = ({mostVoted}) => {
    return (
    <>
        <h1>Anecdote with most votes</h1>
        <p>{mostVoted.anecdote}</p>
        <p>has {mostVoted.votes} votes</p>
    </>
    );
}