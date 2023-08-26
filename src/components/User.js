import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import swal from 'sweetalert'

export default function User() {

    const [name,setName]=useState("")
    const handleClick = async(e)=>{
        try{
        e.preventDefault()
        console.log(name);
          const response = await fetch("http://localhost:8080/addUser", {
         method: "POST",
         headers: {
      "Content-Type": "application/json"
        },
             body: JSON.stringify({
              name: name
            })
        });
console.log(response);
     if (response.status == 201) {
        console.log("in sal");
           let res = await swal({
            icon: 'success',
                title: 'Success',
                text: 'User added successfully!',
        })
            console.log("Response data:succces");
            // Handle the responseData as needed
        } else {
            console.error("Request failed with status:", response.status);
            // Handle the error case
        }}
catch (error) {
//   console.error("An error occurred:", error);
  // Handle any errors during the fetch
}
}


    return (

    <Container>
        <h1>Add User</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="User name" variant="outlined" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <Button variant="contained"
      onClick={handleClick}
      >Submit</Button>
    </Box>
    {name}
    </Container>
  );
}
