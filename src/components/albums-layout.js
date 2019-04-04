import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default function Album(props) {
    return(
        <div className="album py-5 bg-light">
        <Container>
          <Row>
            { props.children }
          </Row>
        </Container>
      </div>

    );
}