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
    Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PasswordInput from '../components/common/PasswordInput';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister, selectIsAuth } from '../redux/slices/authSlice';
import { Navigate } from 'react-router-dom';

function SignUp() {
    const isAuthenticated = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));

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
                <Typography variant="h5">Sign Up</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="firstName"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'First name is required',
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="First name"
                                        fullWidth
                                        autoFocus
                                        error={!!errors.firstName}
                                        helperText={errors.firstName?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="lastName"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'First name is required',
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Last name"
                                        fullWidth
                                        error={!!errors.lastName}
                                        helperText={errors.lastName?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
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
                                        fullWidth
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
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
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="allowEmails"
                                        color="primary"
                                    />
                                }
                                label="I want to receive service updates via email"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                </form>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/login" underline="none">
                            Already have an account? Sign In
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default SignUp;
