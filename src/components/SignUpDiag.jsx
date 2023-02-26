import React from 'react'
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button, Stack } from '@mui/material'
export default function SignUpDiag(props) {
    return (
        <Dialog onClose={props.handleCloseSignUpDiag} open={props.openUp} maxWidth='sm' fullWidth>
            <DialogTitle>Sign In</DialogTitle>
            <DialogContent>
                <Stack direction={'column'} spacing={2} padding={2}>
                    <TextField label='Usernaem' />
                    <TextField label='Firstname' />
                    <TextField label='Lastnaem' />
                    <TextField label='Email' />
                    <TextField label='Password' />
                    <TextField label='Confirm password' />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button color='success'>Sign Up</Button>
                <Button color='error'>Sign In</Button>
            </DialogActions>
        </Dialog>
    )
}
