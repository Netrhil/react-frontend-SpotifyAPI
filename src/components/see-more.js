import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

export default function SeeMore(props) {

    return(
        <Container>
        <Row  className="justify-content-md-center">
            <h4> 10 of 100 elements</h4>
        </Row>
        <Row>
            <Button variant="secondary" size="lg" block> See More</Button>
        </Row>
    </Container>

    );
}