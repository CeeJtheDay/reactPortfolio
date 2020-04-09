import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../Col";
// import {Link} from "react-router-dom";
import "./style.css";

const ProjectWindow = ({image, title, description, deployed, github}) => {
    return (
        <Container id="windowContainer">
            <Row className="justify-content-around">
                <Col className= "justify-content-center" id="projectImageContainer" lg={4}>
                    <img className="projectImage" alt="projectImage" src={image} />
                </Col>
                <Col id="infoContainer" className="justify-content-center" lg={7}>
                    <Card className="projectInfo">
                        <Card.Header as="h1" id="projectHeader">
                            {title}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                        <Row className="justify-content-around">
                            <Col lg={3}>
                                <Button variant="light" className="buttonLinks" href={deployed} > 
                                    Deployed App 
                                </Button>
                            </Col>
                            <Col lg={3}>
                                <Button variant="light" className="buttonLinks" href={github} > 
                                    GitHub Repo 
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectWindow;