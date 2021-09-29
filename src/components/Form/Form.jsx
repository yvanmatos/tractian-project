import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { useHistory } from "react-router";
import axios from 'axios' ;

const initialValue = {
  name:"",
  email: "",

}


const Container = styled.form`
  position: relative;
  top: 300px;
  left: 750px;
  width: 500px;
  display: flex;
  flex-direction: column;
`;

function Form() {
  const [values, setValues] = useState({initialValue});
  const history = useHistory()
  console.log(values);


  function onChange(ev){
    const {name, value} = ev.target
    console.log({name, value})

    setValues({...values, [name]:value})
  }

  function onSubmit(ev) {
    ev.preventDefault();
    
    axios.post('https://my-json-server.typicode.com/tractian/fake-api/users', values)
    .then((response)=>{
      console.log(response)
      history.push("/users")
    })
    .catch((err)=>{
      console.log(err)
    })
  }

    return (

    <Container onSubmit={onSubmit} >
      <TextField 
        onChange={onChange}
        sx={{ position: 'relative', bottom:'10px' }}
        id="name"
        label="Nome" 
        name="name" 
        variant="outlined" />
      <TextField 
        onChange={onChange}
        id="email"
        name="email"
        label="Email"
        type="email" 
        required
        variant="outlined" />
      <Button
        color="primary"
        type="submit"
        variant="contained"
        sx={{ position: "relative", left: "430px", top: "5px", width: "50px" }}>
        Save
      </Button  >
    </Container>
  );
}

export default Form;
