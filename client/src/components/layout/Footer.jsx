import React from "react";
import {Box, Container, CssBaseline, Grid, Link, Typography} from "@mui/material";
import Copyright from "../common/Copyright";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                position: 'fixed',
                bottom: '0px',
                left: '0px',
                right: '0px',
                mb: '0px',
                height: '180px',
                backgroundColor: '#333333',
            }}
        >
            <Grid container spacing={1} sx={{mb: 1}} justifyContent="center">
                <Grid item xs={12} xs={2}>
                    <Typography variant='h6' sx={{color: '#959595', mt: 2}}>
                        About Service
                    </Typography>
                    <Grid item xs>
                        <Link href='/client/src/pages' underline='none' sx={{color: '#FFFFFF'}}>
                            About Us
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link href='/client/src/pages' underline='none' sx={{color: '#FFFFFF'}}>
                            Partners
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link href='/client/src/pages' underline='none' sx={{color: '#FFFFFF'}}>
                            Contacts
                        </Link>
                    </Grid>
                </Grid>
                <Grid item xs={12} xs={2}>
                    <Typography variant='h6' sx={{color: '#959595', mt: 2}}>
                        About Service
                    </Typography>
                    <Grid item xs>
                        <Link href='/client/src/pages' underline='none' sx={{color: '#FFFFFF'}}>
                            About Us
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link href='/client/src/pages' underline='none' sx={{color: '#FFFFFF'}}>
                            Partners
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link href='/client/src/pages' underline='none' sx={{color: '#FFFFFF'}}>
                            Contacts
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Copyright/>
        </Box>
    );
}

export default Footer;