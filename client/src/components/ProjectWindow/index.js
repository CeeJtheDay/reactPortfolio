import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Link from "react-router-dom";

const ProjectWindow = ({image, title, description, deployed, github}) => {
    return (
        <Container fluid={false} id="windowContainer">
            <Row>
                <Col size={4}>
                    <img className="projectImage" alt="projectImage" src={image} />
                </Col>
                <Col size={8}>
                    <Container fluid={true} id="projectInfo">
                        <Row>
                            <h1>{title}</h1>
                        </Row>
                        <Row>
                            <h3>{description}</h3>
                        </Row>
                        <Row justify="around">
                            <Col size={3}>
                                <Link to={deployed} />
                            </Col>
                            <Col size={3}>
                                <Link to={github} />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}