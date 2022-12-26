import React from 'react';
import {CollectionsBookmarkOutlined, LibraryAddOutlined} from "@mui/icons-material";
import MenuSelector from "../../common/MenuSelector";
import {Box} from "@mui/material";

const collectionSections = [
    {
        id: 0,
        label: 'Create Collection',
        link: '/collection/create',
        icon: <LibraryAddOutlined/>,
    },
    {
        id: 1,
        label: 'My Collections',
        link: '/collection/my',
        icon: <CollectionsBookmarkOutlined/>,
    },
];

function CollectionSelector() {
    return (
        <Box sx={{width: 300}}>
            <MenuSelector sections={collectionSections}/>
        </Box>
    );
}

export default CollectionSelector;