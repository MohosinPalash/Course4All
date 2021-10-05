import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css'
const Course = (props) => {
    const { cover, title, instructor, hours, certificate, fee } = props.course;
    return (
        <Col>
            <Card className="course-div">
                <Card.Img variant="top" className="course-cover" src={cover} />
                <Card.Body>
                    <Card.Title><span className="course-title"><strong>{title}</strong></span></Card.Title>
                    <Card.Text><strong>Instructor: </strong>{instructor}</Card.Text>
                    <Card.Text><strong>Duration: </strong>{hours} hrs.</Card.Text>
                    <Card.Text><strong>Certificate: </strong>{certificate}</Card.Text>
                    <Card.Text><strong>Course Fee: </strong>Tk. {fee}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;