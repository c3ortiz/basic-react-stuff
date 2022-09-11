const Numbers = ({persons, filter}) => {
    return(
        <>
        {persons.map((person) => (
            person.name.includes(filter) 
            ? <p key={person.id}>{person.name} {person.number}</p>
            : ''
          ))}
        </>
    )
}

export default Numbers