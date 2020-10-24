import React from 'react';

export default function Logo(props) {
  return (
    <div style={{
      width: '180px',
      height: '34px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }} {...props}>
      <img width={34} src="/favicon.png" alt="Favicon" />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '8px',
      }}>
        <span style={{
          color: '#000000',
          fontSize: '1.4em',
        }}>アジ鯖</span>
      </div>
    </div>
  );
}
