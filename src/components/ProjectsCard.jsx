import React from 'react';

import {
    Card,
    CardBody,
    Col,
    Row,
} from "reactstrap";

import { Fade } from 'react-reveal';
import '../assets/css/imageScale.css';

const ProjectsCard = ({data}) => {
    return ( 
        <Col lg="12">
        <Fade bottom duration={1000} distance="40px">
            <Card className="shadow-lg--hover shadow mt-4">
                <CardBody>
                    <Row>
                    <Col lg="7">
                        <div className="d-flex px-3">
                            <div className="pl-4">
                                <h5 className="text-info">
                                {data.name}
                                </h5>
                                <p className="description mt-3">
                                    {data.desc}
                                </p>
                                <div className="mt-5">
                                <h5 className="description">
                                    {data.stack}
                                </h5>
                            </div>
                            </div>
                            
                        </div>
                    </Col>
                    <Col lg="5">
                        <img src={data.image} style={{width: "100%", cursor: "pointer"}} alt={'data.name'} />
                    </Col>
                    </Row>
                </CardBody>
            </Card>
        </Fade>
        </Col>
     );
}
 
export default ProjectsCard;