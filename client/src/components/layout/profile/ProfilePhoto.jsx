import React from 'react';
import {Avatar, Badge, Box, Card, CardContent, CardHeader, IconButton} from "@mui/material";
import {EditOutlined} from "@mui/icons-material";

function ProfilePhoto() {
    return (
        <Card sx={{maxWidth: 400, mt: 3, ml: 3}}>
            <CardHeader
                title={'My profile picture'}
                titleTypographyProps={{align: 'left'}}
                subheader={'Add a photo of you to be easily recognized'}
                subheaderTypographyProps={{align: 'left'}}
                sx={{maxHeight: 70}}
            />
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 3
                    }}
                >
                    <Badge
                        overlap='circular'
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <Avatar color='transparent'>
                                <IconButton>
                                    <EditOutlined />
                                </IconButton>
                            </Avatar>
                        }
                    >
                        <Avatar
                            src='https://mui.com/static/images/avatar/2.jpg'
                            sx={{
                                mb: 2,
                                width: 150,
                                height: 150
                            }}
                        />
                    </Badge>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ProfilePhoto;