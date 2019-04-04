import React from 'react';
import { Button, Container, InputGroup, FormControl, Alert  } from 'react-bootstrap';

export default function SearchLayout(props) {
  const {   handleChange, 
            handleSearch, 
            searchInput,
             } = props;

    return(
        <section className="jumbotron text-center">
        <Container> 
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search your Album!!"
              aria-label="search"
              aria-describedby="basic-addon2"
              onChange={handleChange}
              value={searchInput}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={()=>{handleSearch()}} >Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Container>
    </section>

    );
}