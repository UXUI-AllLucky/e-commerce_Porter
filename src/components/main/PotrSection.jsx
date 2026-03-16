import React from 'react';
import './PotrSection.scss';

const PotrSection = () => {
  return (
    <section className="potr-section">
      {/* 상단 임시 공간 (1143px) */}
      <div className="temp-space">
        <p>상단 작업 영역 (임시 공간 1143px)</p>
      </div>

      {/* POTR 작업구역 */}
      <div className="potr-content">
      </div>
    </section>
  );
};

export default PotrSection;