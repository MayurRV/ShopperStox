import React from 'react';

const Watermark = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) rotate(-30deg)',
      fontSize: '4rem',
      color: 'rgba(0,0,0,0.25)',
      whiteSpace: 'nowrap',
      zIndex: 9999,
      pointerEvents: 'none',
      userSelect: 'none'
    }}>
      Made by: Mayur Ramesh Vetal | MayurRV2002@gmail.com
    </div>
  );
};

export default Watermark;
