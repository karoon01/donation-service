import React from 'react';
import {Box, Button, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import SocialButtonIcon from "../../common/SocialButtonIcon";
import {Facebook, Instagram, Telegram, Twitter} from "@mui/icons-material";
import CollectionInformation from "./CollectionInformation";
import CollectionDonations from "./CollectionDonations";
import OtherCollections from "./OtherCollections";

function CollectionBody() {
    const [currentComponent, setCurrentComponent] = React.useState(CollectionInformation);
    
    return (
        <Container maxWidth='xl'>
            <Box>
                <Typography
                    variant='h4'
                    sx={{
                        textTransform: 'uppercase',
                        textStroke: '3px'
                    }}
                >
                    Collection name
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Typography variant='subtitle2'>
                        Start Date: 22 December 2022
                    </Typography>
                    <Typography variant='subtitle2'>
                        Status: Active
                    </Typography>
                </Stack>
                <Stack direction='row' spacing={2} sx={{mt: 2}}>
                    <SocialButtonIcon button={<Telegram/>} size={30} activeBackgroundColor={'#0088cc'}/>
                    <SocialButtonIcon button={<Instagram/>} size={30}
                                      activeBackgroundColor={'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'}/>
                    <SocialButtonIcon button={<Facebook/>} size={30} activeBackgroundColor={'#4267B2'}/>
                    <SocialButtonIcon button={<Twitter/>} size={30} activeBackgroundColor={'#1DA1F2'}/>
                </Stack>
            </Box>
            <Box>
                <Grid container>
                    <Grid item xs={12} sx={{mt: 3}}>
                        <img height={500} width={850}
                             src={'https://savelife.in.ua/wp-content/uploads/2022/12/10-%D0%9C%D0%90%D0%91%D1%80-1024x640.jpg'}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction='row' spacing={2}>
                            <Button
                                variant='text'
                                onClick={() => setCurrentComponent(CollectionInformation)}
                            >
                                About Project
                            </Button>
                            <Button
                                variant='text'
                                onClick={() => setCurrentComponent(CollectionDonations)}
                            >
                                Donations
                            </Button>
                        </Stack>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        {currentComponent}
                    </Grid>
                </Grid>
            </Box>
            <OtherCollections/>
        </Container>
    );
}

export default CollectionBody;