export const SumExercises = ({course}) => {

    console.log(course)

    let sumExercises = 0

    console.log(sumExercises)

    for(let i = 0; i < course.parts.length; i++){
        sumExercises += course.parts[i].exercises
    }
    
    console.log(sumExercises)

    
    return (
        <>
            {sumExercises}
        </>
    );
}
