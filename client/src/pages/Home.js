import React from "react"
// import Thumbnail from "../components/Thumbnail";
// import SqwashPic from "../images/Screen Shot 2020-04-02 at 6.34.31 PM.png";
// import FavrPic from "../images/Screen Shot 2020-04-02 at 6.26.18 PM.png";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Avatar from "../components/Avatar";
import {Link} from "react-router-dom";
import NavBar from "../components/NavBar";
 
function Home(props) {
    return (
      // Render a Thumbnail component
      <Container fluid={true} id="mainContainer">
        <Row>
            <NavBar />
        </Row>
        <Row justify="around">
          <Container fluid={false} id="avatarContainer">
            <Row justify="center">
              <Avatar/>
            </Row>
            <Row justify="around">
              <Col size={2}>
                <Link to="github">
                    Github Icon Here
                </Link>
              </Col>
              <Col size={2}>
                <Link to="linkedIn">
                    LinkedIn Icon Here
                </Link>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
      
    )
  }
 
export default Home;