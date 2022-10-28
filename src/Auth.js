import { Button, TextField, Typography, Box } from '@mui/material'
import React, { useState } from 'react'

const Auth = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [inputs, setInputs] = useState({
        name:'',
        email:'',
        password:''
    });

    const handleChange = (e) => {
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefualt(); 
        console.log(inputs)
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box 
            display='flex' 
            flexDirection={'column'} 
            maxWidth={400} 
            alignItems='center' 
            justifyContent={'center'}
            margin='auto'
            marginTop={5}
            padding={10}
            borderRadius={5}
            boxShadow={'1px 1px 10px #ccc'}
            sx={{
                ":hover": {
                boxShadow: '10px 10px 20px #ccc',
            }}}
            >
                <Typography 
                variant='h2' 
                padding={3} 
                textAlign={'center'}
                >
                    {isSignup ? 'Signup' : 'Login' }
                </Typography>

                { isSignup && 
                (<TextField 
                onChange={handleChange}
                value={inputs.name}
                name='name'
                margin='normal' 
                type={'text'} 
                variant='outlined' 
                placeholder='Name'/>)}

                <TextField 
                onChange={handleChange}
                name='email'
                value={inputs.email}
                margin='normal'
                type={'email'} 
                variant='outlined' 
                placeholder='email'/>

                <TextField 
                onChange={handleChange}
                value={inputs.password}
                name='password'
                margin='normal'
                type={'password'} 
                variant='outlined' 
                placeholder='Password'/>

                <Button 
                    type='submit'
                    variant='contained'
                    color='warning'
                    sx={{
                        marginTop : 3
                    }}
                    >
                    {isSignup ? 'Signup' : 'Login'}
                </Button>

                <Button
                    onClick={ ()=>setIsSignup(!isSignup )}
                    variant='contained'
                    sx={{marginTop : 3}}    
                >
                 Change To {isSignup ? "Login" : 'Signup'}
                </Button>
                
            </Box>
        </form>
    </div>
  )
}

export default Auth