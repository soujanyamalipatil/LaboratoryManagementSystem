import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/styles';
import axiosInstance from './axiosConfig';
// import axios from 'axios';


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

export default function AdminLogin({setadminLogin,error,seterror},props) {
    
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
  
  const handleSubmit = async(event) => {
    console.log("button triggered")
    event.preventDefault();
    console.log(email)
    console.log(password)
    try{
    
      console.log("login",email)
      console.log("login",password)
    const url='users/login';
    
    const res=await axiosInstance.post(url,{email,password});

  console.log(res);
 
  console.log(res.data.message,"-------------msg")
  console.log(res.data.data.role);
  if(res.data.error===false){
    if(res.data.data.role==='admin'){
      localStorage.setItem("token",res.data.data.token);
      localStorage.setItem("isAuth",true);
      setadminLogin(true);
      seterror();
      props.history.push('/home');
    }
  }else{
    seterror("user not registered");
  }
  
    }catch(err){
      seterror('Invalid email and password')
    }
  };
 
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
          }}
        >
          <Avatar src="/broken-image.jpg" />
          <Typography component="h1" variant="h5">
            Login here... 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} title="loginBtn" Validate sx={{ mt: 1 }}>
            <TextField
              title="email"
              value={email}
              data-testid="content-email"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setemail(e.target.value)}
            />
            <TextField
              title='password'
              data-testid="content-password"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              autoComplete="current-password"
            />
           {error&&<Typography component="h6" variant='subtitle1'color="red">{error}</Typography>}
            <MyButton
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
             color="red" 
            >
              Login In
            </MyButton>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}