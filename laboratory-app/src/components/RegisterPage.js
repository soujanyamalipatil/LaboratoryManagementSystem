import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { InvertColorsOutlined } from '@mui/icons-material';
import { styled } from '@mui/styles';
import axios from 'axios';
import axiosInstance from './axiosConfig';

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
    background: (props) =>
      props.color === 'red'
        ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: (props) =>
      props.color === 'red'
        ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
   
  });

const theme = createTheme();

export default function RegisterPage(props) {
  const [fname, setfname] = useState('');
  const [isnameValid, setnameValid] = useState(false);
  const [nameError, setnameError] = useState("")
  const [email, setemail] = useState('');
  const [isEmailValid, setisEmailValid] = useState(false);
  const [emailError, setemailError] = useState('')
  const [password, setpassword] = useState('');
  const [isPasswordValid, setisPasswordValid] = useState(false);
  const [passwordError, setpasswordError] = useState('')
  const [role, setrole] = useState('');
      
  const handleSubmit = async(event) => {
    event.preventDefault();
    const isnameValid = validateName(fname)
    const isEmailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)
    console.log(fname,email,password,role);

    
    try{
      if (isnameValid && isEmailValid && isPasswordValid){
        // const token=localStorage.getItem('token');
      const url='users/register';
      const res=await axiosInstance.post(url,{fname,email,password,role})
    // const data =await res.json();
    if (res.data.error===true) {
      window.alert("Email already exists!");
    } else {
      window.alert("Registration Successfull");
      props.history.push('/userdetails')
    }
      }
  
    }catch(err){
      console.log(err);
    }
    
  }
  const expr = /^[a-zA-Z_]{3,15}$/;

  const validateName = (fname) => {
    console.log(fname)
    if (fname && expr.test(fname)) {
      setnameValid(true)
      setnameError('')
      return true
    } else if(!fname){
      setnameValid(false)
      setnameError('Please enter your first name.')
      return false
    }
    else{
      setnameValid(false)
      setnameError('only characters are allowed ')
    }
  }

  //* email

  const mailexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;

  const validateEmail = (email) => {
    if (mailexp.test(email)) {
      setisEmailValid(true)
      setemailError('')
      return true
    } else {
      setisEmailValid(false)
      setemailError('Please enter an valid email address.')
      return false
    }
  }


  //* password
  const passwordExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  const validatePassword = (password) => {
    if (passwordExp.test(password)) {
      setisPasswordValid(true)
      setpasswordError('')
      return true
    } else {
      setisPasswordValid(false)
      setpasswordError('minimum of 1 lower case letter ,1 upper case letter ,1 numeric character')
      return false
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderColor:'bisque'
            
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <InvertColorsOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Please Register here...
          </Typography>
          <Box component="form" Validate title='registerBtn' onSubmit={handleSubmit} sx={{ mt: 3}}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  title="fname"
                  autoComplete="given-name"
                  data-testid="content-name"
                  name="fname"
                  value={fname}
                  required
                  fullWidth
                  id="fname"
                  label="Full Name"
                  onChange={(e)=>setfname(e.target.value)}
                  
                  autoFocus
                />
                {!isnameValid ? <span style={{color:'red', fontSize:'12px',position:"relative",right:"30px"}}>{nameError}</span> : null}
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                   title="email"
                  required
                  fullWidth
                  data-testid="content-email"
                  id="email"
                  value={email}
                  type="email"
                  label="Email Address"
                  name="email"
                  onChange={(e)=>setemail(e.target.value)}
                  autoComplete="email"
                />
                {!isEmailValid ? <span style={{color:'red', fontSize:'12px',position:"relative",right:"30px"}}>{emailError}</span> : null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  title="password"
                  required
                  fullWidth
                  name="password"
                  data-testid="content-password"
                  value={password}
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e)=>setpassword(e.target.value)}
                  autoComplete="new-password"
                />
                {!isPasswordValid ? <span style={{color:'red', fontSize:'11px',position:"relative",right:"30px"}}>{passwordError}</span> : null}
              </Grid>

              <Grid item xs={12}>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
        title="role"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          data-testid="content-role"
          value={role}
          label="role"
          name='role'
          onChange={(e)=>setrole(e.target.value)}
        >
          <MenuItem value='admin'>admin</MenuItem>
          <MenuItem value='user'>user</MenuItem>
          
        </Select>
        </FormControl>
              </Grid>
              
            </Grid>
            <MyButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="red"

            >
              Sign Up
            </MyButton>
           
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}