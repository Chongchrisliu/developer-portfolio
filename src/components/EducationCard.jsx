import React from 'react';
import {
    Card,
    CardBody,
    Badge
} from "reactstrap";


import { Fade } from 'react-reveal';

const colorReference = {
    0: 'success',
    1: 'warning',
    2: 'primary',
    3: 'info',
};

const EducationCard = ({education}) => {
    return ( 
        <Fade right className="shadow mt-4" duration={1000} distance="40px">
            <Card className="card-lift--hover shadow mt-4">
                <CardBody>
                    <div className="d-flex px-3">
                    <div>
                        <h4 className="text-info">
                            {education.schoolName}
                            <Badge color="secondary" className="float-right mt-1" style={{'font-size': '12px'}}>
                                {education.duration}
                            </Badge>
                        </h4>
                        <h6 className="mt-3">{education.subHeader}</h6>
                        
                        <h5 className="mt-3">
                            {education.course.split(',').map((course, index) => {
                                return <Badge color={colorReference[index]} className="mr-2 mb-1" style={{'font-size': '12px'}}>
                                            {course}course
                                        </Badge>
                            })}
                        </h5>
                    
                        <p className="description mt-3" style={{'color': 'black'}}>
                            {education.desc}
                            <ul>
                            {
                                education.descBullets ? 
                                education.descBullets.map((desc) => {
                                    return <li className="mt-2" key={desc}>{desc}</li>
                                }) : null
                            }
                        </ul>
                        </p>
                    </div>
                    </div>
                </CardBody>
            </Card>
        </Fade>
     );
}
 
export default EducationCard;