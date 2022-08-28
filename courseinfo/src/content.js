const Content = ({parts}) => {

    return (
    <div>
        {parts.map((part) => (
            <h2 key={part.id}>
                {part.name}: {part.exercises}
            </h2>    
        ))}
    </div>
    );
    
}
export default Content
