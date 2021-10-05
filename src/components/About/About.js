import React from 'react';
import './About.css'
import about1 from '../../about1.png'
import about2 from '../../about2.png'
import about3 from '../../about3.png'
import { Card, Col } from 'react-bootstrap';
const About = () => {
    return (
        <div>
            <h2>We are ensuring your first step toward your new career</h2>
            <p>Get professional-level training and earn a credential from a leading company</p>
            <div className="service-list">
                <Col>
                    <Card className="service-div">
                        <Card.Img variant="top" className="service-cover" src={about1} />
                        <Card.Body>
                            <Card.Title><strong>Prior experience optional</strong></Card.Title>
                            <Card.Text>Build job-ready skills, even if you’re new to the field.</Card.Text>
                            <hr />
                            <Card.Text><strong>3,428,351</strong></Card.Text>
                            <Card.Text>job openings across Professional Certificate fields </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="service-div">
                        <Card.Img variant="top" className="service-cover" src={about2} />
                        <Card.Body>
                            <Card.Title><strong>Earn a valuable credential</strong></Card.Title>
                            <Card.Text>Apply your new skills to real-world projects using the latest industry tools and techniques.</Card.Text>
                            <hr />
                            <Card.Text><strong>4.7/5</strong></Card.Text>
                            <Card.Text>average rating given by 200,000+ global learners enrolled in an entry-level Professional Certificate. </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="service-div">
                        <Card.Img variant="top" className="service-cover" src={about3} />
                        <Card.Body>
                            <Card.Title><strong>Learn at your own pace</strong></Card.Title>
                            <Card.Text>Complete the training in less than 6 months while working a full-time job.</Card.Text>
                            <hr />
                            <Card.Text><strong>Under 10 hours</strong></Card.Text>
                            <Card.Text>of flexible study per week </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default About;