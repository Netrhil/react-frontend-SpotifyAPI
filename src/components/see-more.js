import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

export default function SeeMoreLayout(props) {

    const { handleAddAlbums } = props;

    return(
        <Container>
            <Row>
                <Button 
                    variant="secondary" 
                    size="lg" 
                    onClick={ () => handleAddAlbums()}
                    block
                    > See More</Button>
            </Row>
    </Container>

    );
}