import React, { useState } from 'react';
import { Divider, List, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function MenuSelector({ sections }) {
    const [index, setIndex] = useState(0);

    return (
        <List component="nav">
            {sections.map((section) => (
                <>
                    <ListItemButton
                        key={section.id}
                        selected={index === section.id}
                        color={index === section.id ? 'primary' : undefined}
                        onClick={() => setIndex(section.id)}
                        component={Link}
                        to={section.link}
                    >
                        {section.icon}
                        <ListItemText primary={section.label} sx={{ ml: 1 }} />
                    </ListItemButton>
                    <Divider />
                </>
            ))}
        </List>
    );
}

export default MenuSelector;
