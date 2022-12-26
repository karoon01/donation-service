import React from 'react';
import {Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField, Typography} from "@mui/material";
import PasswordInput from "../../common/PasswordInput";

function ProfilePasswordRestore() {
    return (
        <Card
            sx={{
                maxWidth: 700,
                mt: 3,
                ml: 3
            }}
        >
            <CardHeader
                title={'Change password'}
                subheader={'Change your password to improve security'}
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
                    <Grid container spacing={2} justifyContent='center'>
                        <Grid item xs={10}>
                            <Typography>Old Password</Typography>
                            <TextField
                                size='small'
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography>New Password</Typography>
                            <PasswordInput
                                size={'small'}
                                sx={{
                                    maxWidth: 220
                                }}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography>New Password Again</Typography>
                            <PasswordInput
                                size={'small'}
                                sx={{
                                    maxWidth: 220
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{mt: 2, mb: 1}}
                    >
                        Update Password
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ProfilePasswordRestore;