import React from 'react';
import Navbar from '../components/layout/navbar/Navbar';
import Footer from '../components/layout/footer/Footer';
import CollectionForm from '../components/layout/collectionOrganizer/CollectionForm';
import CollectionSelector from '../components/layout/collectionOrganizer/CollectionSelector';
import { Box, Grid } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import OrganizerCollections from '../components/layout/collectionOrganizer/OrganizerCollections';

function OrganizerCollection() {
    return (
        <>
            <Navbar />
            <Box sx={{ mt: 3 }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item sx={{ mt: 3 }}>
                        <CollectionSelector />
                    </Grid>
                    <Grid item>
                        <Routes>
                            <Route
                                path="/create"
                                element={<CollectionForm />}
                            />
                            <Route
                                path="/my"
                                element={<OrganizerCollections />}
                            />
                            <Route path="/*" element={<Navigate to="my" />} />
                        </Routes>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
}

export default OrganizerCollection;
