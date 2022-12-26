import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import Footer from "../components/layout/footer/Footer";
import Navbar from "../components/layout/navbar/Navbar";
import FeedbackForm from "../components/layout/about/FeedbackForm";
import ContactData from "../components/layout/about/ContactData";

function Contact() {
    return (
        <>
            <Navbar/>
            <Container maxWidth='xl' sx={{mt: 5}}>
                <Typography variant='h4'>Contacts</Typography>
                <Grid container spacing={4} justifyContent='center'>
                    <Grid item>
                        <ContactData/>
                    </Grid>
                    <Grid item>
                        <FeedbackForm/>
                    </Grid>
                </Grid>
                <Footer/>
            </Container>
        </>
    );
}

export default Contact;