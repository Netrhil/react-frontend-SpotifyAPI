import React from 'react';
import { Container, Row } from 'react-bootstrap';

export function AlbumLayout(props) {
    return(
        <div className="album py-5 bg-light">
        <Container fluid>
          {
            props.resultsMatched && <h1 className="text-black text-center"> No albums matched :(</h1>
          }
        </Container>
        <Container>
          <Row>
            { props.children }
          </Row>
        </Container>
      </div>

    );
}