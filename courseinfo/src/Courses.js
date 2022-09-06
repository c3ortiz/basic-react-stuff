import { SumExercises } from './SumExercises.js'

const Course = ({courses}) => {    


    return (
        <>
            <h1>Web development curriculum</h1>
            {courses.map((course) => (
            <div key={course.id}>
                <h2>{course.name} </h2>
                {course.parts.map((courseInfo) => (
                <p key={courseInfo.id}> 
                     {courseInfo.name}: {courseInfo.exercises} 
                </p>    
                ))}
                <strong>total of <SumExercises course={course} /> exercises </strong>
            </div>    
            ))}
        </>
    );
}

export default Course

//