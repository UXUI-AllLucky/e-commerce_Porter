import React from 'react';
import './HeroSection.scss';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero__frame">
                {/* <img src="/images/hero.jpg" alt="Porter collection" className="hero__img" /> */}
                <div className="hero__img hero__img--placeholder" />
            </div>
        </section>
    );
};

export default HeroSection;