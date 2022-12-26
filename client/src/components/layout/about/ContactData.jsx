import React from 'react';
import {Box, Grid, Stack, Typography} from "@mui/material";
import {Facebook, Instagram, Telegram, Twitter} from "@mui/icons-material";
import SocialButtonIcon from "../../common/SocialButtonIcon";
import ContactText from "../../common/ContactText";

function ContactData() {
    return (
        <Box
            sx={{
                mt: 3,
                backgroundColor: '#F1F1F1',
                width: 600,
                height: 600,
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{
                    ml: 3
                }}
            >
                <Grid item xs={10} item sx={{margin: 2}}>
                    <Typography>Phone Number</Typography>
                    <ContactText label={'+38 (096) 439-71-05'} address={'tel:380964397105'}/>
                </Grid>
                <Grid item xs={10} item sx={{margin: 2}}>
                    <Typography>Email</Typography>
                    <ContactText label={'xblazeradd@gmail.com'} address={'mailto:xblazeradd@gmail.com'}/>
                </Grid>
                <Grid item xs={10} item sx={{margin: 2}}>
                    <Typography>Socials</Typography>
                    <Stack direction='row' spacing={2} sx={{mt: 2}}>
                        <SocialButtonIcon button={<Telegram/>} activeBackgroundColor={'#0088cc'}/>
                        <SocialButtonIcon button={<Instagram/>}
                                          activeBackgroundColor={'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'}/>
                        <SocialButtonIcon button={<Facebook/>} activeBackgroundColor={'#4267B2'}/>
                        <SocialButtonIcon button={<Twitter/>} activeBackgroundColor={'#1DA1F2'}/>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactData;