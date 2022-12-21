import React from 'react';
import {Box, Card, CardContent, CardHeader, Divider, Grid, Select, TextField, Typography} from "@mui/material";

function ProfilePersonal() {
    return (
        <Card
            sx={{
                maxWidth: 700,
                mt: 3,
                ml: 3}}
        >
            <CardHeader
                title={'Your Profile'}
                subheader={'General user\'s information'}
                sx={{maxHeight: 70}}
            />
            <CardContent>
                <Divider/>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 3
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                    >
                        <Grid item xs={5}>
                            <Typography>First Name</Typography>
                            <TextField
                                size='small'
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography>Last Name</Typography>
                            <TextField
                                size='small'
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography>Email</Typography>
                            <TextField
                                size='small'
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography>Phone Number</Typography>
                            <TextField
                                size='small'
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography>Location</Typography>
                            <Select
                                sx={{width: 220, height: '40px'}}
                            >
                            </Select>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ProfilePersonal;