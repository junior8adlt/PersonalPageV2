import React, {useState, createRef} from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardHeader,
    Col
} from "reactstrap"; 

import { Scrollbars } from 'react-custom-scrollbars';

import ColorThief from "colorthief";

import { Fade } from 'react-reveal';


const ExperienceCard = ({data}) => {
    const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();

    const getColorArrays = () => {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    }

    const rgb = (values) => typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
    
    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
          borderRadius: 6,
          backgroundColor: rgb(colorArrays)
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
      };
      const CustomScrollbars = props => (
        <Scrollbars
          renderThumbHorizontal={renderThumb}
          renderThumbVertical={renderThumb}
          {...props}
        />
      );
    return ( 
        <Col lg="4" >
        <Fade left duration={1000} distance="40px">
            <Card style={{flex: 1, height: 700, marginBottom: 30}} className="shadow-lg--hover shadow border-0 text-center rounded">
                <CardHeader style={{background: rgb(colorArrays)}} >
                    <h5 className="text-white">{data.company}</h5>
                </CardHeader>
                <CardBody className="py-5">
                    <img ref={imgRef} className=" bg-white rounded-circle mb-3 img-center img-fluid shadow-lg "  src={data.companylogo} style={{ width: "100px" }} onLoad={() => getColorArrays()} alt=""/>
                    <CardTitle tag="h5">{data.role}</CardTitle>
                    <CardSubtitle>{data.date}</CardSubtitle>
                    <div className="description my-3 text-left" style={{
                        height: 300,
                    }}>
                        <CustomScrollbars>
                        {data.desc}
                        <ul>
                            {
                                data.descBullets ? 
                                data.descBullets.map((desc) => {
                                    return <li key={desc}>{desc}</li>
                                }) : null
                            }
                        </ul>
                        </CustomScrollbars>
                       
                    </div>
                    <div>
                    </div>
                </CardBody>
            </Card>
            </Fade>
        </Col>
     );
}
 
export default ExperienceCard;