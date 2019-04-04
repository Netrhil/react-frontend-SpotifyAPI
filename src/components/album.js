import React from 'react';
import { Card, Col } from 'react-bootstrap';

export function Album(props) {
    const { releaseDate , name, image , artist} = props;

    return(
        <Col md={3}>
            <div className="card mb-4 box-shadow">
                <Card.Img className="card-img-top" variant="top" src={image} data-holder-rendered="true"/>
                <Card.Body>
                <Card.Title> { name } </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> Artist : {  artist } </Card.Subtitle>
                <Card.Text>
                    release date : { releaseDate }
                </Card.Text>
                </Card.Body>
            </div>
        </Col>

    );
}