import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    Grid
} from "@mui/material";

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
            <CardContent>
                <Divider/>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 3
                    }}
                >
                    <Grid container>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked/>} label={'Service updates E-mails'}/>
                            <FormControlLabel control={<Checkbox defaultChecked/>} label={'New Collections E-mails'}/>
                            <FormControlLabel control={<Checkbox defaultChecked/>} label={'Promotions E-mails'}/>
                        </FormGroup>
                    </Grid>
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{mt: 2, mb: 1}}
                    >
                        Update Settings
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ProfileNotification;