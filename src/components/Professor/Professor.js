import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Professor.css'
const Professor = (props) => {
    const { dp, name, subject, students, rating } = props.professor;
    return (
        <Col>
            <Card className="professor-div">
                <Card.Img variant="top" className="professor-cover" src={dp} />
                <Card.Body>
                    <Card.Title><span className="professor-title"><strong>{name}</strong></span></Card.Title>
                    <Card.Text><strong>Course: </strong>{subject}</Card.Text>
                    <Card.Text><strong>Students: </strong>{students}</Card.Text>
                    <Card.Text><strong>Rating: </strong>{rating}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Professor;