const Filter = ({handleFilterInput, filter}) => {
    return (
        <div> filter by name: <input type='text' onChange={handleFilterInput} value={filter}/></div>
    );
}

export default Filter