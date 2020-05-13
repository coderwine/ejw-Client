import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Banner = (props) => {
  console.log(props)

  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-12 typedFace" >Eric Winebrenner</h1>
          <p className="lead" >JavaScript Developer</p>
          <p>{props.name}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Banner;