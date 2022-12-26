import React from 'react';
import {Box, Button, Container, FormControl, Grid, MenuItem, Select, TextField, Typography} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const currencies = [
    {
        value: 'UAH',
        label: '₴',
    },
    {
        value: 'USD',
        label: '$'
    },
    {
        value: 'EUR',
        label: '€',
    }
];

function CollectionForm() {
    const [value, setValue] = React.useState();
    const [currency, setCurrency] = React.useState('₴');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Container maxWidth='md'>
            <Box
                sx={{
                    mt: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'right',
                }}
            >
                <Typography variant='h5'>
                    Create Collection
                </Typography>
                <Grid container spacing={2} sx={{mt: 1}}>
                    <Grid item xs={12} sm={7}>
                        <Typography variant='subtitle1'>
                            Collection Name
                        </Typography>
                        <TextField
                            size='small'
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Typography variant='subtitle1'>
                            Description
                        </Typography>
                        <TextField
                            multiline
                            minRows={5}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Typography variant='subtitle1'>
                            End Date
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                renderInput={(params) => <TextField {...params} />}
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue)
                                }}
                                minDate={dayjs()}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Typography variant='subtitle1'>
                            Goal Sum
                        </Typography>
                        <FormControl>
                            <Select
                                size='small'
                                value={currency}
                                onChange={handleChange}
                            >
                                {currencies.map((currency) => (
                                    <MenuItem key={currency.value} value={currency.label}>
                                        {currency.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            size='small'
                            required
                        />
                    </Grid>
                </Grid>
            </Box>
            <Button
                type='submit'
                variant='contained'
                sx={{mt: 5}}
            >
                Create Collection
            </Button>
        </Container>
    );
}

export default CollectionForm;