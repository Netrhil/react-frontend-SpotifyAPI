import React from 'react';
import { Button, Container, InputGroup, FormControl } from 'react-bootstrap';

export default function SearchLayout(props) {
  const {   handleChange, 
            handleSearch, 
            searchInput,
             } = props;

    return(
      <section className="jumbotron text-center bg-dark">
        <Container fluid>
              <h1 className="text-light"> Search albums in Spotify </h1>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2000px-Spotify_logo_without_text.svg.png" 
                  alt=""
                  width="40"
                  height="40"
                  />
        </Container>
        <br/>
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
              <Button variant="outline-success" onClick={()=>{handleSearch()}} >Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Container>
    </section>

    );
}