import React from "react"
// import Thumbnail from "../components/Thumbnail";
import CPORG from "../../images/CPORG.png";
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
      <Row>
        <ProjectWindow image={CPORG} title="Market Vendors Cooperative" description="A wordpress site built in response to the Covid-19 outbreak in seattle. Allowed for curbside pick-up of orders from multiple vendors in Pike Place Market. Rapidly developed and ready for deployment withing 2 weeks. Added up to 60 products for each participating vendor. Built using popular plugins from Woocommerce and Mailchimp. The Pike Place Market would decide to go a different direction, this site does not currently offer any services, but could easily become an online storefront again, with minimal work. **NO GITHUB REPO**" deployed="https://www.cornerproduce.org" />  
      </Row>
    </Container>
  )
}

export default Projects;