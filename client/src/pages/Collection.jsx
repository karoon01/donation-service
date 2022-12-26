import React from 'react';
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";
import CollectionBody from "../components/layout/collectionPublic/CollectionBody";

function Collection({collection}) {
    return (
        <>
            <Navbar/>
            <CollectionBody/>
            <Footer/>
        </>
    );
}

export default Collection;