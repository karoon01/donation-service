import React from "react";
import {Box, Grid, Stack, Typography} from "@mui/material";
import Copyright from "../../common/Copyright";
import FooterLink from "../../common/FooterLink";
import SocialButtonIcon from "../../common/SocialButtonIcon";
import {Facebook, Instagram, Telegram, Twitter} from "@mui/icons-material";

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
                <Grid item xs={12} sm={2}>
                    <Typography variant='subtitle1' sx={{color: '#959595', mt: 2}}>
                        Socials
                    </Typography>
                    <Stack direction='row' spacing={1}>
                        <SocialButtonIcon button={<Telegram/>} size={30} activeBackgroundColor={'#0088cc'}/>
                        <SocialButtonIcon button={<Instagram/>} size={30}
                                          activeBackgroundColor={'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'}/>
                        <SocialButtonIcon button={<Facebook/>} size={30} activeBackgroundColor={'#4267B2'}/>
                        <SocialButtonIcon button={<Twitter/>} size={30} activeBackgroundColor={'#1DA1F2'}/>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant='subtitle1' sx={{color: '#959595', mt: 2}}>
                        About Service
                    </Typography>
                    <Grid item xs>
                        <FooterLink label='About Us' route='/about'/>
                    </Grid>
                    <Grid item xs>
                        <FooterLink label='Reporting' route='/reporting'/>
                    </Grid>
                    <Grid item xs>
                        <FooterLink label='Partners' route='/partners'/>
                    </Grid>
                    <Grid item xs>
                        <FooterLink label='Contacts' route='/contacts'/>
                    </Grid>
                </Grid>
            </Grid>
            <Copyright/>
        </Box>
    );
}

export default Footer;