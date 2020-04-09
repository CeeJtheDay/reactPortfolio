import React from "react"
// import Thumbnail from "../components/Thumbnail";
// import SqwashPic from "../../images/Screen Shot 2020-04-02 at 6.34.31 PM.png";
// import FavrPic from "../../images/Screen Shot 2020-04-02 at 6.26.18 PM.png";
import { Container, Row,} from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { Nav } from "react-bootstrap";
// import NavBar from "../../components/NavBar";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import ProjectWindow from "../../components/ProjectWindow";
import "./style.css";

function Home(props) {
  return (
    // Render a Thumbnail component
    <Container fluid id="mainContainer">
      {/* <Row>
        <NavBar />
      </Row> */}
      <Row className="justify-content-around">
        <Container id="avatarContainer">
          <Row className= "justify-content-center">
            <Avatar />
          </Row>
          <Row className="justify-content-center">
            <span>
              <Nav.Link href="https://github.com/CeeJtheDay">
                <FaGithubSquare className="profLink" />
              </Nav.Link>
            </span>
            <span>
              <Nav.Link href="https://www.linkedin.com/in/cj-conrad-6548967a/">
                <FaLinkedin className="profLink" />
              </Nav.Link>
            </span>
          </Row>
          <Row id="firstLine" className="justify-content-center">
            <h3>
              My name is CJ Conrad. Full-stack development is what I do.
            </h3>
          </Row>
          <Row id="aboutBody">
            <p>
              "At heart, I am a thespian. I performed musical theater professionally for 7 years in the Seattle area. Through my career as a performer I found confidence in myself and my own abilities, created excetional communication skills, and discovered I have a huge capacity for empathy and patience. I thrive in an environment that constantly challenges me to grow.
            </p>
            <p>
              After my time in the theater I took a job at The world famous Pike Place Fish Market, it was my home for the last 4 years. I worked hard and took on as much resposibility as I could. I was constantly growing as an employee. I became the driver for the shop, maintained hundreds of thousands of dollars of fresh and frozen inventory daily, and streamlined the method used for counting that same inventory at the end of the month. When I started, some of the guys were unsure Id make it as a permanent employee. When I left, they needed to hire 3 guys to make up for the work I was doing all on my own. At Pike Place Fish I worked as a part of a team famous for its culture and attitude. I know, moving forward, that those qualities will lend themselves to my being an exemplary part of whatever team I end up on.
            </p>
            <p> 
              I am stepping into the Tech field with a background that will make me stand out. I know that I still have a lot to learn, but thats what excites me the most. I've always loved learning and couldn't be more excited to embrace the challenge of being a life long student. My aim is to leverage my creative past, work ethic, and willingness to lear to build technology that will make a difference for people."
            </p>
          </Row>
          {/* <Row>
              <ProjectWindow image={SqwashPic} title="Sqwash" description="Sqwash allows start up companies and new developers to collaborate in the best ways possible. Start up companies can post projects looking for first round development, and allow developers to apply for a chance to be on the development team. Developers can increase their experience while also being compensated." deployed="https://sqw4sh.herokuapp.com/" github="https://github.com/CeeJtheDay/Sqwash-A-community-for-developers" />
          </Row>
          <Row>
            <ProjectWindow image={FavrPic} title="Favr" description="Favr, a mibile-first design, connects users looking to make a trade with other users. Geared towards trading services, Favr finds users based on location, offers, and needs." deployed="https://bart3r-app.herokuapp.com/" github="https://github.com/CeeJtheDay/Favr" />
          </Row> */}
        </Container>
      </Row>
    </Container>

  )
}

export default Home;