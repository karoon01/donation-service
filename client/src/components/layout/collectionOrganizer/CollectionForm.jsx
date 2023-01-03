import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import axios from '../../../axios';
import {
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

const currencies = [
    {
        value: 'UAH',
        label: '₴',
    },
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
];

function CollectionForm() {
    const [dateValue, setDateValue] = React.useState();
    const [currency, setCurrency] = React.useState('₴');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            name: '',
            description: '',
            goalSum: 0,
        },
    });

    const onSubmit = async (values) => {
        const data = await axios.post('/collection/create', values);
        console.log(values);
        console.log(data.payload);
    };

    return (
        <Container maxWidth="md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    sx={{
                        mt: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'right',
                    }}
                >
                    <Typography variant="h5">Create Collection</Typography>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        {/*Collection name field*/}
                        <Grid item xs={12} sm={7}>
                            <Typography variant="subtitle1">
                                Collection Name
                            </Typography>
                            <Controller
                                name="name"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'Collection name is required',
                                    },
                                    minLength: {
                                        value: 10,
                                        message:
                                            'Collection name should contain at least 10 characters',
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        error={!!errors.name}
                                        helperText={errors.name?.message}
                                    />
                                )}
                            />
                        </Grid>
                        {/*Description field*/}
                        <Grid item xs={12} sm={7}>
                            <Typography variant="subtitle1">
                                Description
                            </Typography>
                            <Controller
                                name="description"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message:
                                            'Collection description is required',
                                    },
                                    minLength: {
                                        value: 100,
                                        message:
                                            'Collection description should contain at least 100 characters',
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        multiline
                                        minRows={5}
                                        fullWidth
                                        error={!!errors.description}
                                        helperText={errors.description?.message}
                                    />
                                )}
                            />
                        </Grid>
                        {/*Collection end time field*/}
                        <Grid item xs={12} sm={7}>
                            <Typography variant="subtitle1">
                                End Time
                            </Typography>
                            <Controller
                                name="date"
                                control={control}
                                render={({ field, onChange }) => (
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <DateTimePicker
                                            {...field}
                                            renderInput={(params) => (
                                                <TextField {...params} />
                                            )}
                                            value={dateValue}
                                            onChange={(newValue) => {
                                                setValue('date', newValue);
                                                setDateValue(newValue);
                                            }}
                                            minDate={dayjs()}
                                        />
                                    </LocalizationProvider>
                                )}
                            />
                        </Grid>
                        {/*Collection goal sum field*/}
                        <Grid item xs={12} sm={7}>
                            <Typography variant="subtitle1">
                                Goal Sum
                            </Typography>
                            <FormControl>
                                <Select
                                    size="small"
                                    value={currency}
                                    onChange={handleChange}
                                >
                                    {currencies.map((currency) => (
                                        <MenuItem
                                            key={currency.value}
                                            value={currency.label}
                                        >
                                            {currency.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Controller
                                name="goalSum"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message:
                                            'Collection goal sum is required',
                                    },
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Please enter a number',
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        error={!!errors.goalSum}
                                        helperText={errors.goalSum?.message}
                                    />
                                )}
                            />
                        </Grid>
                        {/* End collection goal sum field*/}
                    </Grid>
                </Box>
                <Button type="submit" variant="contained" sx={{ mt: 5 }}>
                    Create Collection
                </Button>
            </form>
        </Container>
    );
}

export default CollectionForm;
