import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import courseData from '../../CourseData/courseData.json'
import Course from '../Course/Course';
import './Home.css'
const Home = () => {

    const [course, setCourse] = useState([]);

    useEffect(() => {
        setCourse(courseData);
        console.log(courseData);
    }, [course])

    const someCourse = course.filter(crs => crs.id % 2)

    return (
        // <Row xs={1} md={3} className="g-4">
        //     {
        //         course.map(eachCourse => <Course course={eachCourse}></Course>)
        //     }
        // </Row>
        <div className="course-list">
            {
                someCourse.map(eachCourse => <Course course={eachCourse}></Course>)
            }
        </div>
    );
};

export default Home;