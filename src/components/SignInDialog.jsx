import React, { useState } from 'react'
import axios from 'axios'

import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button, Stack, Box } from '@mui/material'
export default function SignInDialog(props) {
    const [signInData, setsignInData] = useState({})
    const handleOpenSignUp = () => {
        props.setopenSignInDiag(false)
        props.setopensignUpDiag(true)
    }
    const handleSignIn = () => {
        axios({
            url: window.$api + '/login',
            method: 'post',
            data: signInData,
            withCredentials: true
        }).then(res => {
            switch (res.data.status) {
                case 200:
                    setsignInData({})
                    alert(res.data.msg)
                    props.setopenSignInDiag(false)
                    props.setisloginIn(true)
                    break;
                case 409:
                   alert(res.data.msg)
                    break;
                case 404:
                    alert(res.data.msg)
                    break;           
                default:
                    alert('Login failed')
                    break;
            }
            
        })
    }
    const handleChange = (e) => {
        setsignInData({
            ...signInData, [e.target.name]: e.target.value
        })
    }

    return (

        <Dialog onClose={props.handleCloseSignInDiag} open={props.open} maxWidth='sm' fullWidth>
            <DialogTitle>Sign In</DialogTitle>
            <DialogContent>
                <Stack direction={'column'} spacing={2} padding={2}>
            
                    <TextField label='email'
                        name='email'
                        onChange={handleChange}
                        value={signInData.email || ""}
                    />
                  
                    <TextField label='Password'
                        name='password'
                        type='password'
                        onChange={handleChange}
                        value={signInData.password || ""}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button color='success' onClick={handleSignIn}>Sign In</Button>
                <Button color='error' onClick={handleOpenSignUp}>Sign Up</Button>
            </DialogActions>
        </Dialog>

    )
}
