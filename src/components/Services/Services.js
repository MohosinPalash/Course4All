import React, { useEffect, useState } from 'react';
import courseData from '../../CourseData/courseData.json'
import Course from '../Course/Course';
const Services = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        setCourse(courseData);
        console.log(courseData);
    }, [course])
    return (
        <div className="course-list">
            {
                course.map(eachCourse => <Course course={eachCourse}></Course>)
            }
        </div>
    );
};

export default Services;