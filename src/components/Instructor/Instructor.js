import React, { useEffect, useState } from 'react';
import instructorInfo from '../../CourseData/instructorInfo'
import Popular from '../PopularCourses/Popular';
import Professor from '../Professor/Professor';
import './Instructor.css'
const Instructor = () => {

    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        setInstructor(instructorInfo);
        console.log(instructorInfo);
    }, [instructor])

    return (
        <div>
            <h1 className="heading">POPULAR COURSES</h1>
            <div className="popular-list">
                {
                    instructor.map(pop => <Popular popular={pop}></Popular>)
                }
            </div>
            <h1 className="heading">POPULAR INSTRUCTORS</h1>
            <div className="instructor-list">
                {
                    instructor.map(prof => <Professor professor={prof}></Professor>)
                }
            </div>
        </div>

    );
};

export default Instructor;