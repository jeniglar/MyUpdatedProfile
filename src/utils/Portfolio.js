import React from 'react';
import projects from '../projects.json';
import CreateProject from '../components/Projects';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function CreatePortfolio() {
    return (
        <>
            <Container className="py-5 mb-5 ml-4">
                    <h1> Portfolio </h1>
                    <Row className="pt-2 pl-5">
                        {projects.map(projects =>(
                        <CreateProject
                            key={projects.id}
                            project={projects.project}
                            image={projects.image}
                            link={projects.link}
                            repository={projects.repository}
                        />
                        ))}
                    </Row>
            </Container>
        </>
    )
}

export default CreatePortfolio;