import React from 'react';
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";
import {Box, Container, Divider, Grid, Typography} from "@mui/material";

function About() {
    return (
        <>
            <Navbar/>
            <Container maxWidth='md'>
                <Box
                    sx={{mt: 3}}
                >
                    <Typography variant='h4'>About Donation Service</Typography>
                    <Divider color='#000000' sx={{borderBottomWidth: 2}}/>
                    <Grid container>
                        <Grid item sx={{maxWidth: '70%', mt: 3}}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda
                                consectetur et
                                hic id, inventore laboriosam neque, nulla odio repellat soluta tempore veritatis?
                                Delectus eos
                                excepturi illum, iure nisi quis!
                            </Typography>
                        </Grid>
                        <Grid item sx={{maxWidth: '90%', mt: 2}}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda
                                consectetur et
                                hic id, inventore laboriosam neque, nulla odio repellat soluta tempore veritatis?
                                Delectus eos
                                excepturi illum, iure nisi quis!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda
                                consectetur et
                                hic id, inventore laboriosam neque, nulla odio repellat soluta tempore veritatis?
                                Delectus eos
                                excepturi illum, iure nisi quis!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda
                                consectetur et
                                hic id, inventore laboriosam neque, nulla odio repellat soluta tempore veritatis?
                                Delectus eos
                                excepturi illum, iure nisi quis!
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer/>
        </>
    );
}

export default About;