import React from "react";
import {AppBar, Button, CssBaseline, Stack, Toolbar, Typography} from "@mui/material";

function Navbar() {
    return (
        <AppBar position='relative'>
            <CssBaseline />
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    DonationService
                </Typography>
                <Stack direction='row' spacing={2}
                       sx={{
                           position: 'absolute',
                           top: 12,
                           right: 15
                }}
                >
                    <Button color='inherit'>Collections</Button>
                    <Button color='inherit'>About Us</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;