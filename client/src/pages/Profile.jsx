import React from 'react';
import {Grid} from "@mui/material";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProfilePhoto from "../components/layout/ProfilePhoto";
import ProfileSettingsSelector from "../components/layout/ProfileSettingsSelector";
import ProfilePasswordRestore from "../components/layout/ProfilePasswordRestore";
import {Navigate, Route, Routes} from "react-router-dom";
import ProfilePersonal from "../components/layout/ProfilePersonal";
import ProfileNotification from "../components/layout/ProfileNotification";

function Profile() {
    return (
        <>
            <Navbar/>
            <Grid container justifyContent="center">
                <Grid item xs={2}>
                    <ProfileSettingsSelector/>
                </Grid>
                <Grid item xs={4}>
                    <Routes>
                        <Route path='/profile' element={<ProfilePersonal/>}/>
                        <Route path='/password' element={<ProfilePasswordRestore/>}/>
                        <Route path='/notification' element={<ProfileNotification/>}/>
                        <Route path='*' element={<Navigate to={'profile'}/>}/>
                    </Routes>
                </Grid>
                <Grid item xs={3}>
                    <Routes>
                        <Route path='/profile' element={<ProfilePhoto/>}/>
                    </Routes>
                </Grid>
            </Grid>
            <Footer/>
        </>
    );
}

export default Profile;