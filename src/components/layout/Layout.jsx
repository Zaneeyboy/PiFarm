import React from 'react';
import AppRouter from "./AppRouter";
import Footer from "./Footer";

export default function Layout(props) {
    return ( 
        <div>
            <AppRouter/>
            <Footer/>
        </div>
    );
}