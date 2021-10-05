import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Popular.css'
const Popular = (props) => {
    const { subject } = props.popular;
    return (
        <div>
            <Col>
                <Card className="popular-div">
                    <Card.Body>
                        <Card.Text><strong></strong>{subject}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Popular;