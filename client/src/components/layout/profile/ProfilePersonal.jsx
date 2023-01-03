import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import axios from '../../../axios';
import CountryList from '../../common/CountryList';

function ProfilePersonal() {
    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            location: '',
        },
        mode: 'onChange',
    });

    const onSubmit = async (params) => {
        const data = await axios.patch('/user/profile/update', params);
        console.log(data);
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
                title={'Your Profile'}
                subheader={"General user's information"}
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
                            <Grid item xs={5}>
                                <Typography>First Name</Typography>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Last name is required',
                                        },
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            size="small"
                                            error={!!errors.firstName}
                                            helperText={
                                                errors.firstName?.message
                                            }
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <Typography>Last Name</Typography>
                                <Controller
                                    name="lastName"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Last name is required',
                                        },
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            size="small"
                                            error={!!errors.lastName}
                                            helperText={
                                                errors.lastName?.message
                                            }
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>Email</Typography>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message:
                                                'E-mail address is required',
                                        },
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address',
                                        },
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            size="small"
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>Phone Number</Typography>
                                <Controller
                                    name="phoneNumber"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            size="small"
                                            error={!!errors.phoneNumber}
                                            helperText={
                                                errors.phoneNumber?.message
                                            }
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>Location</Typography>
                                <Controller
                                    name="location"
                                    control={control}
                                    render={({ field }) => (
                                        <CountryList
                                            {...field}
                                            onChange={(value) =>
                                                setValue('location', value)
                                            }
                                            sx={{ width: 220, height: '40px' }}
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
                            Update Settings
                        </Button>
                    </Box>
                </form>
            </CardContent>
        </Card>
    );
}

export default ProfilePersonal;
