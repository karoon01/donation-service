import React from 'react';
import {Link, Typography} from "@mui/material";

function ContactText({label, address}) {
    const [isUnderline, setUnderline] = React.useState(false);

    return (
        <Link
            underline={isUnderline ? 'hover' : 'none'}
            onMouseOver={() => setUnderline(true)}
            href={address}
        >
            <Typography
                variant='h5'
                sx={{
                    textTransform: 'uppercase',
                    textStroke: '3px'
                }}
            >
                {label}
            </Typography>
        </Link>
    );
}

export default ContactText;