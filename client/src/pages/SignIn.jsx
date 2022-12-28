import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, selectIsAuth } from '../redux/slices/authSlice';
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PasswordInput from '../components/common/PasswordInput';
import { Navigate } from 'react-router-dom';

function Login() {
    const isAuthenticated = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchLogin(values));

        if ('refreshToken' && 'accessToken' in data.payload) {
            window.localStorage.setItem(
                'refreshToken',
                data.payload.refreshToken
            );
            window.localStorage.setItem(
                'accessToken',
                data.payload.accessToken
            );
        }
    };

    if (isAuthenticated) {
        return <Navigate to={'/'} />;
    }

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Sign In</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'E-mail address is required',
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Email address"
                                id="email"
                                fullWidth
                                margin="normal"
                                autoFocus
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Password is required',
                            },
                        }}
                        render={({ field }) => (
                            <PasswordInput
                                {...field}
                                onChange={(value) =>
                                    setValue('password', value)
                                }
                                fullWidth
                                label="Password"
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </form>
                <Grid container>
                    <Grid item xs>
                        <Link href="/restore" underline="none">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link href="/register" underline="none">
                            Don't have an account?
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Login;
