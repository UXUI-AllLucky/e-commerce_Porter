import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/main/HeroSection';
import Intro from '../components/Intro';
import PotrSection from '../components/main/PotrSection';

const Main = () => {
    // 새로고침 시 무조건 화면 맨 위에서 시작
    useEffect(() => {
        // 브라우저가 스크롤 위치를 기억하는 기능 차단
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        // 화면을 맨 위로
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/*
                인트로: position fixed + z-index 9999 이라서
                아래 콘텐츠 위에 자동으로 덮임.
                애니메이션 완료 후 위로 슬라이드 아웃되면 히어로 + 헤더가 드러남.
            */}
            <Intro />
            {/* 히어로 이미지 */}
            <HeroSection />
            {/* 헤더: 히어로 아래에서 시작, 스크롤 시 상단 sticky */}
            <Header />
            <main className="main">
                {/* 이후 섹션들 */}
                
                <PotrSection />
            </main>
        </>
    );
};

export default Main;