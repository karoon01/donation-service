import React from 'react';
import {Box, Card, CardContent, CardHeader, Divider, Grid} from "@mui/material";

function ProfileNotification() {
    return (
        <Card
            sx={{
                maxWidth: 700,
                mt: 3,
                ml: 3
            }}
        >
            <CardHeader
                title={'Account Notifications'}
                subheader={'Here you can change settings about notifications via email'}
            />
            <Divider />
            <CardContent>
                <Box>
                    <Grid container>

                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ProfileNotification;