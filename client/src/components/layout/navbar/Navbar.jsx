import React from "react";
import {AppBar, CssBaseline, Link as MuiLink, Stack, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <AppBar position='relative'>
            <CssBaseline/>
            <Toolbar>
                <MuiLink color='inherit' underline='none' component={Link} to='/home'>
                    <Typography variant='h6'>
                        DonationService
                    </Typography>
                </MuiLink>
                <Stack direction='row' spacing={2}
                       sx={{
                           position: 'absolute',
                           top: '25%',
                           right: '1%'
                       }}
                >
                    <MuiLink color='inherit' underline='none' component={Link} to='/collections'>
                        <Typography variant='h6'>
                            Collections
                        </Typography>
                    </MuiLink>
                    <MuiLink color='inherit' underline='none' component={Link} to='/about'>
                        <Typography variant='h6'>
                            About Us
                        </Typography>
                    </MuiLink>
                    <MuiLink color='inherit' underline='none' component={Link} to='/login'>
                        <Typography variant='h6'>
                            Login
                        </Typography>
                    </MuiLink>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;