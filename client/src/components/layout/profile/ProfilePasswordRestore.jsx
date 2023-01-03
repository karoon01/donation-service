import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Typography,
} from '@mui/material';
import PasswordInput from '../../common/PasswordInput';
import { Controller, useForm } from 'react-hook-form';
import axios from '../../../axios';

function ProfilePasswordRestore() {
    const {
        handleSubmit,
        control,
        setValue,
        getValues,
        formState: { errors },
        setError,
    } = useForm({
        defaultValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
        mode: 'onChange',
    });

    const onSubmit = async (params) => {
        await axios.patch('/user/password/update', params);
    };

    return (
        <Card
            sx={{
                maxWidth: 700,
                mt: 3,
                ml: 3,
            }}
        >
            <CardHeader
                title={'Change password'}
                subheader={'Change your password to improve security'}
                sx={{ maxHeight: 70 }}
            />
            <CardContent>
                <Divider />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mt: 3,
                        }}
                    >
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={10}>
                                <Typography>Old Password</Typography>
                                <Controller
                                    name="oldPassword"
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
                                                setValue('oldPassword', value)
                                            }
                                            size={'small'}
                                            sx={{
                                                maxWidth: 220,
                                            }}
                                            error={!!errors.password}
                                            helperText={
                                                errors.password?.message
                                            }
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>New Password</Typography>
                                <Controller
                                    name="newPassword"
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
                                                setValue('newPassword', value)
                                            }
                                            size={'small'}
                                            sx={{
                                                maxWidth: 220,
                                            }}
                                            error={!!errors.password}
                                            helperText={
                                                errors.password?.message
                                            }
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>New Password Again</Typography>
                                <Controller
                                    name="confirmPassword"
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
                                                setValue(
                                                    'confirmPassword',
                                                    value
                                                )
                                            }
                                            size={'small'}
                                            sx={{
                                                maxWidth: 220,
                                            }}
                                            error={!!errors.password}
                                            helperText={
                                                errors.password?.message
                                            }
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 2, mb: 1 }}
                        >
                            Update Password
                        </Button>
                    </Box>
                </form>
            </CardContent>
        </Card>
    );
}

export default ProfilePasswordRestore;
