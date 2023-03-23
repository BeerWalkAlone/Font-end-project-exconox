import React, { useState } from 'react'
import axios from 'axios'

import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button, Stack, Box } from '@mui/material'
export default function SignInDialog(props) {
    const [signInData, setsignInData] = useState({})
    const handleOpenSignUp = () => {
        props.setopenSignInDiag(false)
        props.setopensignUpDiag(true)
    }
    const handleSignUp = () => {
        axios({
            url: 'http://localhost:3001/login',
            method: 'post',
            data: signInData
        }).then(res => {
            console.log(res.data)
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
                <Button color='success' onClick={handleChange}>Sign In</Button>
                <Button color='error' onClick={handleOpenSignUp}>Sign Up</Button>
            </DialogActions>
        </Dialog>

    )
}
