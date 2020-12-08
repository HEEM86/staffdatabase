import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';



class Jumbo extends Component{
  render() {
    return(
      <Jumbotron fluid>
        <Container>
          <h1>The React Employee Directory</h1>
          <p>
            This Directory can search first name and sort the age and gender
          </p>
        </Container>
      </Jumbotron>
    );
  }

}

export default Jumbo;
