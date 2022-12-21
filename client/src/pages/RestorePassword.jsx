import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import PasswordInput from "../components/common/PasswordInput";

function RestorePassword() {
    return (
        <>
            <Container maxWidth='xs'>
                <Box
                    sx={{
                        marginTop: 12,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, backgroundColor: 'secondary.main'}}>
                        <KeyOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'>
                        RestorePassword
                    </Typography>
                    <Grid container spacing={2} sx={{mt: 1}}>
                        <Grid item xs={12}>
                            <TextField
                                label='Email'
                                id='email'
                                required
                                fullWidth
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <PasswordInput fullWidth={true} label={'Old Password'}/>
                        </Grid>
                        <Grid item xs={12}>
                            <PasswordInput fullWidth={true} label={'New Password'}/>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Restore
                    </Button>
                </Box>
            </Container>
        </>
    );
}

export default RestorePassword;