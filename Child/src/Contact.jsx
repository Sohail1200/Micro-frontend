import React from 'react'
import { FormGroup, FormControl, InputLabel, Input, Button ,} from '@mui/material'
import { Margin } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';


const useStyle=makeStyles({
    formStyle : {
        width : "50%",
        Margin : "auto",
        padding : 20,
        border:"1px solid black",
    
       
    },
});
const Contact = () => {
    const classes=useStyle();
  return (
    <div>
        <h3>TDL FORM</h3>
        <FormGroup className={classes.formStyle}>
            <FormControl>
                <InputLabel> Full Name</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel> Email</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel> Phone</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel> Address</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel> PIN</InputLabel>
                <Input />
            </FormControl>

            <Button variant="contained" color="secondary" sx={{ background: "#063970" }}>Submit</Button>
        </FormGroup>
      
    </div>
  )
}

export default Contact
