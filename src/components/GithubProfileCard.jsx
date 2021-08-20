import React from 'react';

import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import ProfileImage from "../assets/img/icons/common/ProfileImage.jpeg";

const GithubProfileCard = () => {
    return ( 
            <Card className="section-lg bg-gradient-info shadow-lg border-0">
                <Container className="">
                <div className="p-2">
                  <Row className="">
                  <Col className="order-lg-2" lg="4">
                      <img src={ProfileImage} style={{width: "250px"}} alt="" className="img-center img-fluid shadow shadow-lg--hover mb-4"/>
                    </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 className="text-white">
                        Reach Out to me!
                      </h2>
                      <p className="lead text-white mt-3">
                        Discuss a opportunity or just say hi? My inbox is open for all.
                      </p>
                      <p className="text-white mt-3">
                        I'm a Full Stack Web Developer | outdoor enthusiast | Cinephile
                      </p>
                      <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info mb-5">
                        <i className="ni ni-pin-3 text-info mr-2" />
                          Toronto, Canada
                      </div>
                        <SocialLinks />
                    </Col>                    
                  </Row>
                </div>
                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;