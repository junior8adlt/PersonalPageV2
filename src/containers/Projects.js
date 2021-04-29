import React from 'react';

// import { projects } from "../portfolio";
import {
    Container,
    Row,
    Col
} from "reactstrap";

import { Fade } from 'react-reveal';
import GreetingLottie from '../components/DisplayLottie/DisplayLottie';
import underConstruction from '../assets/lottie/under.json';

import {FaLaptopCode} from 'react-icons/fa'

const Projects = () => {
    return ( 
        <section className="section section-lg">
            <Container>
              <Fade bottom duration={1000} distance="40px">
              <div className="d-flex p-4">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle" style={{color: '#212329'}}>
                        <FaLaptopCode/>
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3" style={{color: '#212329'}}>Projects</h4>
                    </div>
                </div>
                <Row className="row-grid align-items-center">
                <Col lg="12" className="projects-col text-center">
                      <GreetingLottie animationData={underConstruction}/>
                </Col>
                    
                    {/* {
                        projects.map(data => {
                            return <ProjectsCard data={data} />
                        })
                    } */}
                </Row>
              </Fade>
            </Container>
          </section>
     );
}
 
export default Projects;