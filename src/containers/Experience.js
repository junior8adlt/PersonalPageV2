import React from 'react';
import { experience } from '../data/data';
import { Container, Row } from 'reactstrap';

import { Fade } from 'react-reveal';

import ExperienceCard from '../components/ExperienceCard/ExperienceCard';
import { GrBriefcase } from "react-icons/gr";


const Experience = () => {
  return (
    <section className='section section-lg bg-gradient-dark' style={{
        marginTop: '20rem'
    }}>
      <Container>
        <Fade left duration={1000} distance='40px'>
          <div className='d-flex p-4'>
            <div>
              <div className='icon icon-lg icon-shape bg-white shadow rounded-circle text-info'>
                <GrBriefcase/>
              </div>
            </div>
            <div className='pl-4'>
              <h4 className='display-3 text-white'>Experience</h4>
            </div>
          </div>
          <Row className='row-grid align-items-center'>
            {experience.map((data, index) => {
              return <ExperienceCard data={data} key={index} />;
            })}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Experience;
