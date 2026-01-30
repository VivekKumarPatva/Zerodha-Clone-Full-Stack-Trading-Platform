import React from 'react';

import Navbar from '../Navbar';
import Hero from './Hero';
import LeftSection from '../products/LeftSection';
import RightSection from '../products/RightSection';
import Universe from '../products/Universe';
import Footer from '../Footer';

function PricingPage() {
    return (<>
        <Navbar />
        <Hero />
        <LeftSection />
        <RightSection />
        <Universe />
        <Footer />

    </>);
}

export default PricingPage;