import React, { useState } from 'react'
import Form from './Form'
import logo from './logo.svg';
import './App.css';

function App() {

  const [textValue, setTextValue] = useState('')
  const [formValues, setFormValues] = useState({})

  return (
    <div className="App">
      <div>
        <Form textValue={textValue} setTextValue={setTextValue} formValues={formValues} setFormValues={setFormValues}/>
      </div>
    </div>
  );
}

export default App;
