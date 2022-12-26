import React from 'react';
import {IconButton} from "@mui/material";

function SocialButtonIcon({button, activeBackgroundColor, size}) {
    return (
        <IconButton
            size='small'
            sx={{
                height: size,
                width: size,
                color: '#000',
                borderRadius: 0,
                border: '2px solid black',
                '&:hover': {
                    background: activeBackgroundColor,
                    color: '#fff',
                    borderColor: activeBackgroundColor
                }
            }}
        >
            {button}
        </IconButton>
    );
}

export default SocialButtonIcon;