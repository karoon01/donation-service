import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PasswordInput from "../components/common/PasswordInput";

function Login() {
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
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">
                    Sign In
                </Typography>
                <TextField
                    label='Email address'
                    id='email'
                    required
                    fullWidth
                    margin='normal'
                    autoFocus
                />
                <PasswordInput fullWidth={true} label={'Password'}/>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label='Remember Me'
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 2, mb: 2}}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href='/restore' underline='none'>
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link href='/register' underline='none'>
                            Don't have an account?
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Login;