import React, { useState } from 'react';
import HeroSection from '../components/main/HeroSection';
import Intro from '../components/Intro';

const Main = () => {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <div>
            {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
            <HeroSection />
        </div>
    );
};

export default Main;
