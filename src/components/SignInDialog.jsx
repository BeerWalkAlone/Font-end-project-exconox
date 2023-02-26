import React, {useState} from 'react'

import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button, Stack} from '@mui/material'
export default function SignInDialog(props) {

    const handleOpenSignUp = () => {
        props.setopenSignInDiag(false)
        props.setopensignUpDiag(true)
    }

    return (
        <Dialog onClose={props.handleCloseSignInDiag} open={props.open} maxWidth='sm' fullWidth>
            <DialogTitle>Sign In</DialogTitle>
            <DialogContent>
                <Stack direction={'column'} spacing={2} padding={2}>
                <TextField label='Email'/>
                <TextField label='Password'/>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button color='success'>Sign In</Button>
                <Button color='error' onClick={handleOpenSignUp}>Sign Up</Button>
            </DialogActions>
        </Dialog>
    )
}
