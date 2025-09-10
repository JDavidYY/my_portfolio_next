import React from 'react';

const Banner = ({ children }) => {
    return (
        <div className="waveWrapper waveAnimation" style={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <div style={{ position: 'absolute', zIndex: 20, width: '100%', height: '100%' }} className="flex flex-col h-full items-center justify-center text-white px-4">
                {children}
            </div>
            <div className="waveWrapperInner bgTop" style={{ zIndex: 10 }}>
                <div className="wave waveTop background_top" style={{ height: '200px', zIndex: 10 }} />
            </div>
            <div className="waveWrapperInner bgMiddle" style={{ zIndex: 9 }}>
                <div className="wave waveMiddle background_mid" style={{ height: '220px', zIndex: 9 }} />
            </div>
            <div className="waveWrapperInner bgBottom" style={{ zIndex: 8 }}>
                <div className="wave waveBottom background_bot" style={{ height: '200px', zIndex: 8 }} />
            </div>
        </div>
    );
};
export default Banner;