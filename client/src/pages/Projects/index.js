import React from "react"
// import Thumbnail from "../components/Thumbnail";
import SqwashPic from "../../images/Screen Shot 2020-04-02 at 6.34.31 PM.png";
import FavrPic from "../../images/Screen Shot 2020-04-02 at 6.26.18 PM.png";
import { Container, Row, } from "react-bootstrap";
// import NavBar from "../../components/NavBar";
import ProjectWindow from "../../components/ProjectWindow";
import "./style.css";

function Projects(props) {
  return (
    <Container id="mainContainer">
      <Row>
        <ProjectWindow image={SqwashPic} title="Sqwash" description="Sqwash allows start up companies and new developers to collaborate in the best ways possible. Start up companies can post projects looking for first round development, and allow developers to apply for a chance to be on the development team. Developers can increase their experience while also being compensated." deployed="https://sqw4sh.herokuapp.com/" github="https://github.com/CeeJtheDay/Sqwash-A-community-for-developers" />
      </Row>
      <Row>
        <ProjectWindow image={FavrPic} title="Favr" description="Favr, a mibile-first design, connects users looking to make a trade with other users. Geared towards trading services, Favr finds users based on location, offers, and needs." deployed="https://bart3r-app.herokuapp.com/" github="https://github.com/CeeJtheDay/Favr" />
      </Row>
    </Container>
  )
}

export default Projects;