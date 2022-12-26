import React from 'react';
import {Box, Button, Grid, TextField, Typography} from "@mui/material";

function FeedbackForm() {
    return (
        <Box
            sx={{
                mt: 3,
                backgroundColor: '#F1F1F1',
                maxWidth: 600,
                height: 600,
            }}
        >
            <Grid
                container
                spacing={2}
                justifyContent='center'
            >
                <Grid item>
                    <Typography variant='h5'>
                        Feedback Form
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography>Your Name*</Typography>
                    <TextField
                        fullWidth
                        size='small'
                        required
                        sx={{
                            backgroundColor: '#fff'
                        }}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Typography>Your Email*</Typography>
                    <TextField
                        fullWidth
                        size='small'
                        required
                        sx={{
                            backgroundColor: '#fff'
                        }}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Typography>Your Text*</Typography>
                    <TextField
                        fullWidth
                        size='string'
                        multiline
                        required
                        minRows={6}
                        sx={{
                            backgroundColor: '#fff'
                        }}
                    />
                </Grid>
                <Button
                    type='submit'
                    variant='contained'
                    sx={{mt: 4}}
                >
                    Send Message
                </Button>
            </Grid>
        </Box>
    );
}

export default FeedbackForm;