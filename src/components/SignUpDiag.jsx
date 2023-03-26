import React, { useState } from 'react'
import axios from 'axios'
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button, Stack } from '@mui/material'
export default function SignUpDiag(props) {
    const [signUpData, setsignUpData] = useState({})

    const handleOpenSignIn = () => {
        props.setopenSignInDiag(true);
        props.setopensignUpDiag(false);
    };

    const handleSignUp = () => {
        if (signUpData.password === signUpData.conpassword) {
            axios({
                url: window.$api + '/register',
                method: 'post',
                data: signUpData
            }).then(res => {
                alert(res.data)
                setsignUpData({})
                props.setopensignUpDiag(false)
            })
        } else {
            alert('password are not matched')
        }
    }

    // const handleChangUsername =(e) =>{
    //     setsignUpData({...signUpData, username: e.target.value})
    // }
    // const handleChangEmail =(e) =>{
    //     setsignUpData({...signUpData, email: e.target.value})
    // }

    const handleChange = (e) => {
        setsignUpData({
            ...signUpData, [e.target.name]: e.target.value
        })
    }
    console.log(signUpData)
    return (
        <Dialog
            onClose={props.handleCloseSignUpDiag}
            open={props.openUp}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>Sign In</DialogTitle>
            <DialogContent>
                <Stack direction={"column"} spacing={2} padding={2}>
                    <TextField 
                    label="Usernaem" 
                    name='username' 
                    onChange={handleChange} 
                    value={signUpData.username || ""} />

                    <TextField 
                    label="Firstname"
                     name='firstname' 
                     onChange={handleChange} 
                     value={signUpData.firstname || ""}/>

                    <TextField 
                    label="Lastnaem"
                     name='lastname' 
                     onChange={handleChange}  
                     value={signUpData.lastname || ""} />

                    <TextField 
                    label="Email" 
                    name='email' 
                    onChange={handleChange} 
                     value={signUpData.email || ""}/>

                    <TextField
                     label="Password" 
                     name='password' 
                     onChange={handleChange} 
                     value={signUpData.password || ""}/>

                    <TextField
                     label="Confirm password"
                      name='conpassword' onChange={handleChange} 
                      value={signUpData.conpassword || ""}/>
                </Stack>

            </DialogContent>
            <DialogActions>
                <Button color="success" onClick={handleSignUp}>Sign Up</Button>
                <Button color="error" onClick={handleOpenSignIn}>
                    Sign In
                </Button>
            </DialogActions>
        </Dialog>
    );
}
