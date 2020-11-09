import React from 'react';
import Card from 'react-bootstrap/Card';


function CreateProject(props) {
    return (
        <>
            <Card className="card mt-2 mr-3 border-dark">
                <Card.Img src={props.image} className="card-img-top img-fluid" alt={props.project} />
                <Card.Body>
                    <Card.Title className="project"> {props.project} </Card.Title>
                    <a href={props.link} target="_blank" rel="noreferrer" className="btn mb-1"> Deployed Application</a>
                    <a href={props.repository} target="_blank" rel="noreferrer" className="btn mb-1"> GitHub Repository </a>
                </Card.Body>
            </Card>
        </>
    );
};

export default CreateProject;