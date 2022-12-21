import React from 'react';
import {
    Avatar,
    Box, Button,
    Checkbox,
    Container,
    FormControlLabel, Grid, Link,
    TextField,
    Typography
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PasswordInput from "../components/common/PasswordInput";

function SignUp() {
    return (
        <Container maxWidth='xs'>
            <Box
                sx={{
                    marginTop: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, backgroundColor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">
                    Sign Up
                </Typography>
                <Grid container spacing={2} sx={{mt: 1}}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label='First name'
                            id='firstName'
                            required
                            fullWidth
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label='Last name'
                            id='lastName'
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Email address'
                            id='email'
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <PasswordInput fullWidth={true} label={'Password'}/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="allowEmails" color="primary"/>}
                            label='I want to receive service updates via email.'
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 2, mb: 2}}
                >
                    Sign Up
                </Button>
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <Link href="/login" underline='none'>
                            Already have an account? Sign In
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default SignUp;