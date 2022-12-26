import React from 'react';
import {Card, CardContent, CardHeader} from "@mui/material";
import {AccountBox, Notifications, PasswordOutlined} from "@mui/icons-material";
import MenuSelector from "../../common/MenuSelector";

const sections = [
    {
        id: 0,
        label: 'Personal',
        link: '/settings/profile',
        icon: <AccountBox/>,
    },
    {
        id: 1,
        label: 'Password',
        link: '/settings/password',
        icon: <PasswordOutlined/>,
    },
    {
        id: 2,
        label: 'Notification',
        link: '/settings/notification',
        icon: <Notifications/>,
    },
];

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
                <MenuSelector sections={sections}/>
            </CardContent>
        </Card>
    );
}

export default ProfileSettingsSelector;