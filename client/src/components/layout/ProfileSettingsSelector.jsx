import React from 'react';
import {Card, CardContent, CardHeader, Divider, List, ListItemButton, ListItemText} from "@mui/material";
import {AccountBox, Notifications, PasswordOutlined} from "@mui/icons-material";
import {Link} from 'react-router-dom';

function ProfileSettingsSelector() {
    return (
        <Card sx={{maxWidth: 300, mt: 3, ml: 3}}>
            <CardHeader
                title={'Settings'}
                titleTypographyProps={{align: 'left'}}
                subheader={'Customize view and extra actions'}
                subheaderTypographyProps={{align: 'left'}}
                sx={{maxHeight: 70}}
            />
            <CardContent>
                <List component="nav" aria-label="mailbox folders">
                    <ListItemButton
                        component={Link}
                        to='/settings/profile'
                    >
                        <AccountBox sx={{mr: 1}}/>
                        <ListItemText primary="Personal"/>
                    </ListItemButton>
                    <Divider/>
                    <ListItemButton
                        component={Link}
                        to='/settings/password'
                    >
                        <PasswordOutlined sx={{mr: 1}}/>
                        <ListItemText primary="Password"/>
                    </ListItemButton>
                    <Divider/>
                    <ListItemButton
                        component={Link}
                        to='/settings/notification'
                    >
                        <Notifications sx={{mr: 1}}/>
                        <ListItemText primary="Notification"/>
                    </ListItemButton>
                </List>
            </CardContent>
        </Card>
    );
}

export default ProfileSettingsSelector;