import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import CollectionCard from './CollectionCard';

const collections = [
    {
        id: 1,
        name: 'First Collection Name',
        description: 'First Collection description',
        currentSum: 900000,
        goalSum: 18000000,
        pictureUrl: '',
    },
    {
        id: 2,
        name: 'Second Collection Name',
        description: 'Second Collection description',
        currentSum: 900000,
        goalSum: 18000000,
        pictureUrl: '',
    },
];

function OtherCollections() {
    return (
        <Box sx={{ mt: 5 }}>
            <Typography variant="h4">Other Projects</Typography>
            <Divider color="#000000" sx={{ borderBottomWidth: 2 }} />
            <Stack direction="row">
                {collections.map((collection) => (
                    <CollectionCard
                        collectionName={collection.name}
                        collectionDescription={collection.description}
                        currentSum={collection.currentSum}
                        goalSum={collection.goalSum}
                    />
                ))}
            </Stack>
        </Box>
    );
}

export default OtherCollections;
