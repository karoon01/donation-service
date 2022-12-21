import React from 'react';
import {Box, Typography} from "@mui/material";

function Copyright() {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: '0px',
                left: '0px',
                right: '0px',
                mb: '0px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#000000',
            }}
        >
            <Typography
                sx={{
                    height: '40px',
                    mt: 'auto',
                    color: '#808080',
                }}
            >
                © {new Date().getFullYear()} Donation Service. All rights reserved
            </Typography>
        </Box>
    );
}

export default Copyright;