import React from 'react';
import {Link as MuiLink, Typography} from '@mui/material'
import {Link} from "react-router-dom";

function FooterLink({label, route}) {
    return (
        <MuiLink
            underline='none'
            component={Link}
            to={route}
            sx={{
                color: '#FFFFFF',
                '&:hover': {
                    color: '#959595'
                }
            }}
        >
            <Typography variant='subtitle2'>{label}</Typography>
        </MuiLink>
    );
}

export default FooterLink;
