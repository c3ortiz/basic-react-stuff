const AddNew = ({handleNameChange, newName, handleNumberChange, newNumber, handleAddButton}) => {
    return(
        <form>
            <div> name: <input type='text' onChange={handleNameChange} value={newName}/></div>
            <div> number: <input type='text' onChange={handleNumberChange} value={newNumber}/></div>
            <div> <button type="submit" onClick={handleAddButton}>add</button></div>
        </form>
    )
}

export default AddNew