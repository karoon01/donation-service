import React from 'react';
import Navbar from '../components/layout/navbar/Navbar';
import CollectionBody from '../components/layout/collectionPublic/CollectionBody';

function Collection({ collection }) {
    return (
        <>
            <Navbar />
            <CollectionBody />
            {/*<Footer/>*/}
        </>
    );
}

export default Collection;