import React from 'react';
import {
    Card,
    CardBody,
    Badge
} from "reactstrap";


import { Fade } from 'react-reveal';

const EdutionCard = ({education}) => {
    return ( 
        <Fade right duration={1000} distance="40px">
            <Card className="card-lift--hover shadow mt-4" style={{
                height: '170px',
                width: '500px'
            }}>
                <CardBody>
                    <div className="d-flex px-3">
                    <div className="pl-4">
                        <h5 className="text-or">
                        {education.schoolName}
                        </h5>
                        <h6 style={{
                            color: '#343a40'
                        }}>{education.subHeader}</h6>
                        <Badge color="dark" className="mr-1">
                        {education.duration}
                    </Badge>
                    </div>
                    </div>
                </CardBody>
            </Card>
        </Fade>
     );
}
 
export default EdutionCard;