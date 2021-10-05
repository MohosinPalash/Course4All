import React, { useEffect, useState } from 'react';
import courseData from '../../CourseData/courseData.json'
const Home = () => {

    const [course, setCourse] = useState([]);

    useEffect(() => {
        const setCourse = (courseData);
        console.log(courseData);
    }, [course])

    return (
        <div>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;