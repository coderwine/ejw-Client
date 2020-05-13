import React, {useState} from 'react';
import {Button, Form, Input} from 'reactstrap';
import './App.css';

import Jumbo from './components/jumbotron.component';


function App(props) {

  const [name, setName] = useState('That Which Cannot Be Named');

  let nameHandler= (input) => {
    console.log(input)
    setName(input)
  }

  return (
    <div className="App">
      {/* Currently working on injecting a name into the state to pass through to Jumbotron */}
      <Form onSubmit={() => nameHandler}>
        <Input type="text" placeholder="Input Name Here"></Input>
        <Button>Submit</Button>
      </Form> <br/>

      <Jumbo name={name} />
    </div>
  );
}

export default App;
