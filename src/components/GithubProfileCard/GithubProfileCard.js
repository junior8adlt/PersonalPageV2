import React from 'react';

import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";

import SocialLinks from "../SocialLinks/SocialLinks";
import {FaMapMarkerAlt} from 'react-icons/fa'
const GithubProfileCard = ({prof}) => {
    return ( 
            <Card className="section-lg bg-gradient-dark shadow-lg border-0" style={{borderRadius: 0}}>
                <Container className="">
                <div className="p-2">
                  <Row className="">
                  <Col className="order-lg-2" lg="4">
                      <img src={prof.avatar_url} style={{width: "200px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/>
                    </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 className="text-white">
                       Contact Me
                      </h2>
                      <p className="lead text-white mt-3">
                      Do you want to talk about a project, or do you need any questions?
                      </p>
                      <p className="text-white mt-3">
                          {prof.bio}
                      </p>
                      <div className="my-3 icon-shape bg-white shadow rounded">
                        <FaMapMarkerAlt className="mr-2" />
                        {prof.location}
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