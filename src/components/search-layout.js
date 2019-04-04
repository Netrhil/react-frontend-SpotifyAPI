import React from 'react';
import { Button, Container, InputGroup, FormControl  } from 'react-bootstrap';

export default function SearchLayout(props) {

    return(
        <section className="jumbotron text-center">
        <Container> 
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search your Album!!"
              aria-label="search"
              aria-describedby="basic-addon2"
              onChange={()=>{console.log("me cambiaaaan")}}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={()=>{console.log("me clikeaaan")}} >Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Container>
    </section>

    );
}