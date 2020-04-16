import React from 'react';
import About from './components/HomePage/About';
import Features from "./components/HomePage/Features";
import Pricing from "./components/HomePage/Pricing";
import CallToAction from "./components/HomePage/CallToAction";
import Testimonials from "./components/HomePage/Testimonials";

export default function Home() {
    return ( 
        <div >
            <About />
            <Features />
            <Testimonials />
            <Pricing />
            <CallToAction />
        </div>
    );
}
